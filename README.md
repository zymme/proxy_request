
Sample node api - demonstrate how to create the node api app from the ground up.


`Step 1
Create a package.json file in root of project

`Step 2
Create server.js file in root of project






` Reference material
https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

https://scotch.io/tutorials/scraping-the-web-with-node-js

https://www.npmjs.com/


# How to generate public private keys for signing and verifying jwt tokens

1. openssl genrsa -out private.pem 2048

2. openssl rsa -in private.pem -outform PEM -pubout -out public.pem

