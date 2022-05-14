// nivel 1, ejercicio 1

function myPromise(num, expected){
    return new Promise((resolve, reject) =>{
        if (num === expected){
            resolve('Numero Correcto')
        } else {
            reject( new Error('Numero no correcto'))
        }
})
}
const prueba = myPromise(5, 5)

prueba
.then(function(message){
    console.log(message)
})
.catch(function(err){
    console.log(err)
})

const prueba2 = myPromise(2, 6)

prueba2
.then(function(message){
    console.log(message)
})
.catch(function(err){
    console.log(err.message)
})
 

//nivel 1, ejercicio 2

function printMessage(message){
    console.log(message)
}

const mayorOMenor = (num, printFunction) => {
    if(num > 10){
        printFunction('Este numero es mayor de 10')
    } else if(num < 10){
        printFunction('Este numero en menor que 10')
    }else {
        printFunction('Este numero es igual que 10')
    }
}

mayorOMenor(5, printMessage)
mayorOMenor(15, printMessage)
mayorOMenor(10, printMessage) 

//nivel 2, ejercicio 1

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
   salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmployee = (num) =>{
    return new Promise((resolve, reject) => {
        let condition
        for (let employe of employees){
            if (employe.id === num){
                condition = employe 
            }
        }
        if (condition){
            resolve(condition)
        } else {
            reject(new Error('el empleado no existe'))
        }
     })
}

 getEmployee(2)
.then(value=> { console.log(value)})
.catch(err => { console.log (err.message)}) 

//nivel 2, ejercicio 2

const getSalary = (employe) => {
    return new Promise((resolve, reject) =>{
        let salaryEmploye
        for (let salary of salaries){
            if(salary.id === employe.id){
                salaryEmploye = salary.salary
            }
        }
        if (salaryEmploye){
            resolve(salaryEmploye)
        } else {
            reject(new Error('error'))
        }
    })
}

 getSalary(salaries[1])
.then(salary => console.log(salary))
.catch(err => console.log(err.message))  

//nivel 2, ejercicio 3

getEmployee(2)
.then(employee => {
    console.log(employee.name)
    return getSalary(employee)})
.then(salary => {
    console.log(salary)
}).catch(err => console.log(err.message))

//nivel 3, ejercicio 1

getEmployee(5)
.then(employee => {
    console.log(employee.name)
    return getSalary(employee)})
.then(salary => {
    console.log(salary)
}).catch(err => console.log(err))  