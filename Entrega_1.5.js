const fs = require('fs');
const archiver = require('archiver');
const { exec } = require('child_process');
const os = require('os');
const crypto = require('crypto');
//const iv = crypto.randomBytes(16).toString('hex').slice(0, 16);
const iv = 'ee2c4f7044f29f29'
const key = '123456781234567812345678';
const algorithm = 'aes-192-cbc'

// nivel 1 ejercicio 1

function createFile(name, text) {
	fs.writeFile(name, text, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('archivo creado');
		}
	});
}

//createFile('./myFile.txt', 'Buenos dias')

//nivel 1, ejercicio 2

function readFile() {
	fs.readFile('./myFile.txt', 'utf8', (err, data) => {
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
	});
}

//readFile()

//nivel 1, ejercicio 3

function compressFile() {
	let output = fs.createWriteStream('./myZipFile.zip');
	let fileZip = archiver('zip');

	fileZip.pipe(output);
	fileZip.append(fs.createReadStream('./myFile.txt'), { name: 'myFile.txt' });

	fileZip.finalize();
	console.log('Archivo comprimido');
}

//compressFile()

//nivel 2, ejercicio 1

function printRecursive() {
	const print = setInterval(() => console.log('Hola Mundo'), 1000);

	setTimeout(() => {
		clearInterval(print);
	}, 12000);
}

//printRecursive()

//nivel 2, ejercicio 2

function listDirectory() {
	let command = 'dir';
	let directory = 'C:/Users';

	const platform = os.platform();

	if (platform !== 'win32') {
		command = 'ls';
		directory = '/Users';
	}

	exec(command, { cwd: directory }, (err, stdout, stderr) => {
		if (err) {
			console.error(`exec error: ${err}`);
			return;
		}
		if (stderr) {
			console.log('stderr: ' + stderr);
		}

		console.log(`Ficheros: ${stdout}`);
	});
}

//listDirectory()

//nivel 3, ejercicio 1, parte 1

async function encodedFiles() {
	const text = new Promise((resolve) => {
		fs.readFile('./myFile.txt', 'utf8', (err, data) => {
			resolve(data);
		});
	});

	let textInString = await text;

	//file hexadecimal
	const convert = (from, to) => str => Buffer.from(str, from).toString(to)

	const utf8ToHex = convert('utf8', 'hex')
	const textHexa = utf8ToHex(textInString)
	
	createFile('./Hexadecimal.txt', textHexa);

	//file base64
	const utf8ToBase64 = convert('utf8', 'base64')
	let textInBase64 = utf8ToBase64(textInString)
	
	createFile('./base64.txt', textInBase64);
}

//encodedFiles()

//nivel 3, ejercicio 1, parte 2

async function encryptedFile(file) {
	const text = new Promise((resolve) => {
		fs.readFile(file, 'utf8', (err, data) => {
			resolve(data);
		});
	});

	let textFile = await text;

	
	 const encrypter = crypto.createCipheriv(algorithm, key, iv);
	let encryptedMsg = encrypter.update(textFile, 'utf-8', 'hex');
	encryptedMsg += encrypter.final('hex');
    console.log('encrypted ' + encryptedMsg)
	
	createFile(file, encryptedMsg); 
 }

function encryptedFiles() {
	encryptedFile('./hexadecimal.txt');
	encryptedFile('./base64.txt');
}

//encryptedFiles()

//nivel 3, ejercicio 1, parte 3

async function decryptedFile(file, newFile) {
	const text = new Promise((resolve) => {
		fs.readFile(file, 'utf-8' , (err, data) => {
			resolve(data);
		});
	});

	let textCrypted = await text;

	console.log('texto archivo: ' + textCrypted)

    
	const decrypter = crypto.createDecipheriv(algorithm, key, iv);
let decryptedMsg = decrypter.update(textCrypted, "hex", "utf8");
decryptedMsg += decrypter.final("utf8");
	console.log('mensaje desencriptado: ' + decryptedMsg)
    
    file === './Hexadecimal.txt' ? decodeHexa(decryptedMsg, newFile) : decodeBase64(decryptedMsg, newFile)

}

function decodeHexa(text, newFile){
    
	const convert = (from, to) => str => Buffer.from(str, from).toString(to)
	const hexToUtf8 = convert('hex', 'utf8')
	const textDecoded = hexToUtf8(text)
    console.log('mensaje descodificado: ' + textDecoded)

	createFile(newFile, textDecoded)
}

function decodeBase64(text, newFile){
	const convert = (from, to) => str => Buffer.from(str, from).toString(to)
	const base64ToUtf8 = convert('base64', 'utf8')
	const textDecoded = base64ToUtf8(text)
	console.log('mensaje descodificado: ' + textDecoded)

	createFile(newFile, textDecoded)
}

function decryptedFiles(){
	decryptedFile('./Hexadecimal.txt', './myFile_copy_1.txt')
	decryptedFile('./base64.txt', './myFile_copy_2.txt')
}

decryptedFiles()