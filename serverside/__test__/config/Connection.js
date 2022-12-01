const mysql = require ('mysql');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Princewee123',
    database:'inventory'
  });
  
  // connection.connect(function(error){
  //   if(error){
  //     console.log('not connected');
  //   }else{
  //     console.log('Connected!:)');
  //   }
  // }); 

  module.export = connection;