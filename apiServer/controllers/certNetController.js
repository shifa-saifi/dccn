'use strict';

const { Gateway, Wallets } = require('fabric-network');
const path = require('path');
const fs = require('fs');

// Adjust these constants to match your setup
const CHANNEL_NAME = 'mychannel';                  // e.g., 'mychannel'
const CHAINCODE_NAME = 'certnet';                 // e.g., 'certnet'
const MSP_ID = 'Org1MSP';                         // e.g., 'Org1MSP'
const USER_IDENTITY = 'appUser';                  // The enrollment ID for the user
const CONNECTION_PROFILE_PATH = path.resolve(
  __dirname,
  '..', // move up from controllers folder
  'config',
  'connection-org1.json' // typical connection profile JSON
);

/**
 * Helper function to get a Fabric contract from the gateway.
 * - Loads the connection profile
 * - Sets up the wallet
 * - Connects as `appUser` (or whatever identity you specify)
 * - Returns the contract handle
 */
async function getContract() {
  try {
    // 1. Load the connection profile
    const ccp = JSON.parse(fs.readFileSync(CONNECTION_PROFILE_PATH, 'utf8'));

    // 2. Set up an in-memory or file system wallet
    //    (Replace with the correct path to your wallet if you use file-based wallet)
    const walletPath = path.join(process.cwd(), 'wallet');
    const wallet = await Wallets.newFileSystemWallet(walletPath);

    // 3. Check to see if the user identity already exists in the wallet
    const identity = await wallet.get(USER_IDENTITY);
    if (!identity) {
      throw new Error(`An identity for the user "${USER_IDENTITY}" does not exist in the wallet. 
      Run the enrollment script or registerUser.js to enroll the user first.`);
    }

    // 4. Create a new gateway and connect
    const gateway = new Gateway();
    await gateway.connect(ccp, {
      wallet,
      identity: USER_IDENTITY,
      discovery: { enabled: true, asLocalhost: true } // asLocalhost: true if running on localhost
    });

    // 5. Get the network and contract
    const network = await gateway.getNetwork(CHANNEL_NAME);
    const contract = network.getContract(CHAINCODE_NAME, 'org.certification-network.certnet');

    return { gateway, contract };
  } catch (error) {
    console.error('Failed to connect to gateway:', error);
    throw error;
  }
}

/**
 * Controller: Create a new student
 */
exports.createStudent = async (req, res) => {
  const { studentId, name, email } = req.body;
  if (!studentId || !name || !email) {
    return res.status(400).json({ error: 'Missing required fields: studentId, name, email.' });
  }

  let gateway;
  try {
    const conn = await getContract();
    gateway = conn.gateway;
    const contract = conn.contract;

    // Submit transaction to chaincode
    const resultBuffer = await contract.submitTransaction('createStudent', studentId, name, email);
    const result = JSON.parse(resultBuffer.toString());

    res.status(200).json({
      message: 'Student created successfully',
      student: result
    });
  } catch (err) {
    console.error(`Failed to create student: ${err}`);
    res.status(500).json({ error: (err as Error).message });
  } finally {
    if (gateway) {
      gateway.disconnect();
    }
  }
};

/**
 * Controller: Get a student by ID
 */
exports.getStudent = async (req, res) => {
  const { studentId } = req.params;
  if (!studentId) {
    return res.status(400).json({ error: 'Missing required parameter: studentId.' });
  }

  let gateway;
  try {
    const conn = await getContract();
    gateway = conn.gateway;
    const contract = conn.contract;

    const resultBuffer = await contract.evaluateTransaction('getStudent', studentId);
    const student = JSON.parse(resultBuffer.toString());

    res.status(200).json({
      student
    });
  } catch (err) {
    console.error(`Failed to get student: ${err}`);
    res.status(500).json({ error: (err as Error).message });
  } finally {
    if (gateway) {
      gateway.disconnect();
    }
  }
};

/**
 * Controller: Issue a certificate to a student
 */
exports.issueCertificate = async (req, res) => {
  const { studentId, courseId, gradeReceived, originalHash } = req.body;
  if (!studentId || !courseId || !gradeReceived || !originalHash) {
    return res.status(400).json({ 
      error: 'Missing required fields: studentId, courseId, gradeReceived, originalHash.'
    });
  }

  let gateway;
  try {
    const conn = await getContract();
    gateway = conn.gateway;
    const contract = conn.contract;

    const resultBuffer = await contract.submitTransaction(
      'issueCertificate',
      studentId,
      courseId,
      gradeReceived,
      originalHash
    );
    const certificate = JSON.parse(resultBuffer.toString());

    res.status(200).json({
      message: 'Certificate issued successfully',
      certificate
    });
  } catch (err) {
    console.error(`Failed to issue certificate: ${err}`);
    res.status(500).json({ error: (err as Error).message });
  } finally {
    if (gateway) {
      gateway.disconnect();
    }
  }
};

/**
 * Controller: Verify a certificate
 */
exports.verifyCertificate = async (req, res) => {
  const { studentId, courseId, currentHash } = req.body;
  if (!studentId || !courseId || !currentHash) {
    return res.status(400).json({ error: 'Missing required fields: studentId, courseId, currentHash.' });
  }

  let gateway;
  try {
    const conn = await getContract();
    gateway = conn.gateway;
    const contract = conn.contract;

    const resultBuffer = await contract.submitTransaction(
      'verifyCertificate',
      studentId,
      courseId,
      currentHash
    );
    const verification = JSON.parse(resultBuffer.toString());

    res.status(200).json({
      message: 'Certificate verification result',
      verification
    });
  } catch (err) {
    console.error(`Failed to verify certificate: ${err}`);
    res.status(500).json({ error: (err as Error).message });
  } finally {
    if (gateway) {
      gateway.disconnect();
    }
  }
};
