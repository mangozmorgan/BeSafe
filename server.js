const express = require ('express')
const app = express()
const http = require('http');
const https = require('https');
const mongoClient = require ("mongodb").MongoClient
const formidableMiddleware = require('express-formidable');
let fs = require('fs');
const bcrypt = require ("bcrypt")
let folderEncrypt= require ("folder-encrypt")
const options = {
  key: fs.readFileSync('selfsigned.key'),
  cert: fs.readFileSync('selfsigned.crt')};
let url = "mongodb+srv://admin:!!Hubble84!!@besafe.drqjj.mongodb.net/<dbname>?retryWrites=true&w=majority"

let arg1 = "kiki"
const spawn = require("child_process").spawn;
const pythonProcess = spawn('python',["test.py", arg1,]);
pythonProcess.stdout.on('data', (data) => {
  console.log(data)
});

app.set('view engine','ejs')
app.use(express.static('public'))

app.set('views','./views')

mongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology : true},(err ,client)=>{
  if (err) throw err 
  console.log("connecté a la base de données")
  const db = client.db("BeSafeDB")
  const collection = db.collection("TempImgText")
let test = 

    app.get ('/', (req, res) => { 
        res.render('index') 
    });

    app.post("/sendFile",formidableMiddleware(),(req,res)=>{
      let fichier = req.fields.uploadFichierInput
      let id = req.fields.titleFile
      let mdp = req.fields.mdp
      

      folderEncrypt.encrypt({
        password: mdp,
        input: fichier,
        output: id  // optional, default will be input path with extension `encrypted`
    }).then(() => {
        console.log('encrypted!');
    }).catch((err) => {
        console.log(err);
    });      
      res.cookie("nomFichier",id,{maxAge:9000000*10},{sameSite:'none',secure:true})
      res.render("index")
      console.log("Bien envoyé sur la DB")
      res.end()
    })

    app.post("/decryptFile",formidableMiddleware(),(req,res)=>{
      let fichier = req.fields.uploadFichierInput2
      let id = req.fields.titleFile2
      let mdp = req.fields.mdp2
      

      folderEncrypt.decrypt({
        password: mdp,
        input: fichier,
        output: id+"ékiki" // optional, default will be input path without extension
    }).then(() => {
        console.log('decrypted!');
        
    }).catch((err) => {
        console.log(err); 
        
    });
    })

    const {PythonShell} =require('python-shell'); 

//Router to handle the incoming request. 
app.post("/test",formidableMiddleware() ,(req, res, next)=>{
  let name = req.fields.test 
  let finalName = req.fields.finalName 
  let mdp = req.fields.mdp3
  console.log(name + finalName +mdp)
	//Here are the option object in which arguments can be passed for the python_test.js. 
	let options = { 
		mode: 'text', 
		pythonOptions: ['-u'], // get print results in real-time 
		scriptPath: '', //If you are having python_test.py script in same folder, then it's optional. 
		args: [name,finalName,mdp] //An argument which can be accessed in the script using sys.argv[1] 
	}; 
	

	PythonShell.run('crypto.py', options, function (err, result){ 
		if (err) throw err; 
		// result is an array consisting of messages collected 
		//during execution of script. 
		console.log('Bien effectué'); 
		
  }); 
  res.render('index')
}); 

    


})







https.createServer(options,app).listen(8080,()=>
console.log("Serveur lancé"))