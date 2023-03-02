# VUEFLIX API

Couple of enpoints of Node.js API using MongoDB Atlas sample mflix data collection. Initial Back-end for [VUEFLIX](https://github.com/rodri-afa/vueflix)

## Instalation

1. Sign up on MongoDB Atlas : [mongodb.com](https://www.mongodb.com/cloud/atlas/register)
1. Create new cluster with a user and password associated to it.
1. Load Sample Dataset on cluster and wait a few minutes while loading.
1. Click on connect to app and copy link of node app driver
   ```
   mongodb+srv://yourUserName:yourPassword@YourCluster.f0vkpcm.mongodb.net/sample_mflix?retryWrites=true&w=majority
   ```
1. Create a .env environment file with a variable called ATLAS_URL
   ```.env
   ATLAS_URL="mongodb+srv://yourUserName:yourPassword@YourCluster.f0vkpcm.mongodb.net/sample_mflix?retryWrites=true&w=majority"
   ```
1. Install dependencies with:

   ```
   npm install
   ```

1. Run the server with:

   ```
   npm start
   ```
