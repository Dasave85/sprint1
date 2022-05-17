const fs = require('fs')
const archiver = require('archiver')

// nivel 1 ejercicio 1

function createFile(){
    fs.writeFile('./myFile.txt', 'Buenos dias', (err)=>{
        if (err){
            console.log(err)
        } else {
            console.log('archivo creado')
        }
    })
}

//createFile()

//nivel 1, ejercicio 2

function readFile(){
    fs.readFile('./myFile.txt', 'utf8',  (err, data) =>{
        if(err){
            console.log(err)
        } else{
            console.log(data)
        }
    })
}

//readFile()

//nivel 1, ejercicio 3

function compressFile(){
    let output = fs.createWriteStream('./myZipFile.zip')
    let fileZip = archiver('zip')

    fileZip.pipe(output)
    fileZip.append(fs.createReadStream('./myFile.txt'), {name: 'myFile.txt'})
   
    fileZip.finalize()
    console.log('Archivo comprimido')
}

//compressFile()

//nivel 2, ejercicio 1

function printRecursive(){
    const print = setInterval(() => console.log('Hola Mundo'), 1000)

    setTimeout(()=> {
        clearInterval(print)
    }, 12000)
}

//printRecursive()

//nivel 2, ejercicio 2

const { exec } = require('child_process');

  
exec('dir', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  if (stderr){
      console.log('stderr: ' + stderr)
  }
 
  console.log(`Ficheros: ${stdout}`);
});
