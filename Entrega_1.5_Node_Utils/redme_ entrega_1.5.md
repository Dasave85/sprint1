para comprobar el funcionamiento correcto del programa tienes que ir descomentando por orden las llamadas a las funciones agrupadas en una funcion general llamada 'start':

createFile: crea un archivo .txt con un texto en el interior.
readFile: lee el contenido del archivo creado en la funcion createFile
compressFile: comprime en .zip el archivo creado en la funcion createFile
printRecursive: muestra por consola un mensaje repetido cada segundo y se deja de mostrar a los 12 segundos
listDirectory: muestra el directorio /Users dependiendo del sistema operativo del pc
encodedFiles: crea dos archivos .txt con su contenido codificado uno en hexadecimal y el otro en base64
encryptedFiles: encripta el contenido de los archivos creados en la funcion encodedFiles y los sobreescribe en los mismos archivos
decryptedFiles: desencrypta, descodifica los archivos sobreescritos de la funcion encryptedFiles y crea una copia .txt del archivo original  