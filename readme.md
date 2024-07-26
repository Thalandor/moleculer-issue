- Make sure nats is up and running (for this example the docker base NATS image has been used, credentials included ;) )
- Make sure you have a large file on the same folder (or change the path in the sender.js). Personally I used this random 50mb file from here http://speedtest.tele2.net/50MB.zip
- Install your dependencies
- After that just run

```
node listener.js
node sender.js
```

- Restart several times sender.js process, you will see how the memory increases crazily.
