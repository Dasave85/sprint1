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

async function employeeData (id) {
    try{
        const employee = await getEmployee(id)
        const salary = await getSalary(employee)
        console.log (`El empleado ${employee.name}, recibe ${salary} € mensuales`)

    } catch (err) {
        console.log(err.message)

    }
}

employeeData(2)