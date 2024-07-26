// https://moleculer.services/docs/0.14/moleculer-repl.html
      
const { createReadStream } = require('fs');
const { ServiceBroker } = require('moleculer');
const broker = new ServiceBroker({
  namespace: 'streamissue',
  nodeID: "nodesender",
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
});
      

async function start() {
  try {
      await broker.start();            
      var stream = createReadStream('./50MB.zip')
      await broker.call("notpublisher.listener",null,{meta: {danger: "dsadsds"}, stream});  
    } catch (err) {
      console.error(err);
      // process.exit(1);
  }
}

(async () => {
    await start();
})();