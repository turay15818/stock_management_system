import  mysql from 'mysql';

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'!Love2code',
    database:'inventory'
  });
  
  connection.connect(function(error){
    if(error){
      console.log('not connected');
    }else{
      console.log('Connected!:)');
    }
  }); 

 export default connection;