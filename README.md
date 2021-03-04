# Med-For-Sure
App related to eCommerce of medicine 
Its a mean stack implementation project.

To run the project:
1) clone the project and unzip.
2) Redirecting to the particular directories of angular folder install the npm packages using : >npm install .Redireting to med-app folder install the following: 
    >npm istall express -g, >npm install mongoose
4)Run your mongodb and mongo application from path C:\Program Files\MongoDB\Server\4.2\bin
5)Add data to your mongo collection, following the data schema using the commands:
   >use DATABASE_NAME, >db.createCollection('COLLECTION_NAME'), EX  >db.COLLECTION_NAME.insert({"name":"Herceptin","description":"a cancer medicine interferes with spread of    cancer cell","price":180,"img":"","medicinefor":"breast cancer,stomach cancer,liver cancer","ratings":4.0})
7)Run your angular application rediecting to angular folder, command used: >ng serve . Check on your browser using http://localhost:4200
8)Run node.js file in a different console using the command :>node server.js. Check on your browser using http://localhost:3000/showProducts


You can see the data displayed on angular server from the node.js backend,fetching the data from the mongodb.
