const swaggerAutogen = require('swagger-autogen')();

const doc= 
{
    info:{
        title:"Contacts Api",
        description:"Contacts Api"
    },
    host: 'contacts-project-3i6u.onrender.com',
    //host: 'localhost:3002',
    schemes:['http','https']
};

const outputFile ='./swagger.json';
const endpointFiles =['./routes/index.js'];

swaggerAutogen(outputFile,endpointFiles,doc);