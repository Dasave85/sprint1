const fs = require('fs')
const archiver = require('archiver')
const crypto = require('crypto')




// nivel 1 ejercicio 1

function createFile(name, text) {
    fs.writeFile(name, text, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('archivo creado')
        }
    })
}

//createFile('./myFile.txt', 'Buenos dias')

//nivel 1, ejercicio 2

function readFile() {
    fs.readFile('./myFile.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
}

//readFile()

//nivel 1, ejercicio 3

function compressFile() {
    let output = fs.createWriteStream('./myZipFile.zip')
    let fileZip = archiver('zip')

    fileZip.pipe(output)
    fileZip.append(fs.createReadStream('./myFile.txt'), { name: 'myFile.txt' })

    fileZip.finalize()
    console.log('Archivo comprimido')
}

//compressFile()

//nivel 2, ejercicio 1

function printRecursive() {
    const print = setInterval(() => console.log('Hola Mundo'), 1000)

    setTimeout(() => {
        clearInterval(print)
    }, 12000)
}

//printRecursive()

//nivel 2, ejercicio 2

/* const { exec } = require('child_process');

  
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
 */
//nivel 3, ejercicio 1, parte 1

async function encriptedFiles() {
    const text = new Promise((resolve) => {
        fs.readFile('./myFile.txt', 'utf8', (err, data) => {
            resolve(data)
        })
    })

    let textInString = await text

    //file hexadecimal
    let textHexa = ''
    for (let i = 0; i < textInString.length; i++) {
        textHexa += Number(textInString.charCodeAt(i).toString(16))
    }
    createFile('./Hexadecimal.txt', textHexa)

    //file base64

    let buff = new Buffer.from(textInString)
    let textInBase64 = buff.toString('base64')
    createFile('./base64.txt', textInBase64)


}

//encriptedFiles()

//nivel 3, ejercicio 1, parte 2

async function encriptedFilesPart2() {

    //file hexadecimal
    const text = new Promise((resolve) => {
        fs.readFile('./Hexadecimal.txt', 'utf8', (err, data) => {
            resolve(data)
        })
    })

    let textInHexadecimal = await text

const iv = crypto.randomBytes(16).toString("hex").slice(0, 16);
const key = "12345678123456781234567812345678"
const encrypter = crypto.createCipheriv("aes-256-cbc", key, iv);
let encryptedMsg = encrypter.update(textInHexadecimal, "utf8", "hex")
encryptedMsg += encrypter.final("hex");
console.log("Encrypted message: " + encryptedMsg);

// desencriptar
const decrypter = crypto.createDecipheriv("aes-256-cbc", key, iv);
let decryptedMsg = decrypter.update(encryptedMsg, "hex", "utf8");
decryptedMsg += decrypter.final("utf8");

console.log("Decrypted message: " + decryptedMsg);
}
encriptedFilesPart2()