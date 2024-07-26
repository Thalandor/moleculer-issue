      
const { ServiceBroker } = require('moleculer');
const broker = new ServiceBroker({
  namespace: 'streamissue',
  nodeID: "nodelistener",
  transporter: {
    type: 'NATS',
    options: {
      servers: ['nats://localhost:4222'],
      user: 'ruser',
      pass: 'T0pS3cr3t',
    },
  },
  transit: {
  	disableVersionCheck: true
  },
  errorHandler: (err, info) => {
    console.error('Error occurred:', err);
  }
});


async function test(ctx) {
  throw new Error('Tehee');
}
      

async function start() {
  try {
      await broker.start();
      await broker.createService({name: "notpublisher", actions:{"listener":async (ctx) => await test(ctx)}});


    } catch (err) {
      console.error(err);
  }
}

(async () => {
    await start();
})();