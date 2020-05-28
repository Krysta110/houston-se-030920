# Node.js and Socket.io

**Time: 1:00** 

**FormativeEducation Deck:** https://formative.education/projects/748/edit

### Learning Goals

- Explain the purpose of WebSockets
- Emit Data From the Server
- Listen for Data on the Client



### Activation

##### Time: 0:00



### Learning Goal 1: Explain the purpose of WebSockets:

##### Time: 0:20

##### Demonstrate 



### Learning Goal 2: Emit Data From the Server

##### Time: 0:20

##### Demonstrate 

* Setup: 

  * On the server (this is from the [docs](<https://socket.io/get-started/chat/#Integrating-Socket-IO>))

  ```
  const app = require('express')();
  const http = require('http').createServer(app);
  const io = require('socket.io')(http); // <-- Web Socket Server
  ```

  * On the client: (also docs)

    ```
    <script src="http://localhost:3000/socket.io/socket.io.js"></script>
    <script>
      const socket = io();
    </script>
    ```

* app` can still handle our http requests

* `io` can handle our socket connections

* What code runs when a new review is created?

* Here I can `emit` data



### Learning Goal 3: Listen for Data on the Client

##### Time: 0:20

##### Demonstrate 