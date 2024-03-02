require("dotenv").config({ path: '../.env' });
const jsonld = require('jsonld');
const DKG = require('../index.js');

const OT_NODE_HOSTNAME = process.env.OT_NODE_HOSTNAME;
const OT_NODE_PORT = process.env.OT_NODE_PORT;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ENVIRONMENT = 'mainnet';

const DkgClient = new DKG({
    environment: ENVIRONMENT,
    endpoint: OT_NODE_HOSTNAME,
    port: OT_NODE_PORT,
    blockchain: {
        name: 'gnosis:100',
        publicKey: PUBLIC_KEY,
        privateKey: PRIVATE_KEY,
    },
    maxNumberOfRetries: 30,
    frequency: 2,
    contentType: 'all',
});


function divider() {
    console.log('==================================================');
    console.log('==================================================');
    console.log('==================================================');
}

async function fetchNodeInfo() {
    const nodeInfo = await DkgClient.node.info();
    console.log('======================== NODE INFO RECEIVED');
    console.log(nodeInfo);
}

// Call the async function
fetchNodeInfo().catch(console.error);