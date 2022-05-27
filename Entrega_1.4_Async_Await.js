//nivel 1, ejercicio 1

let employees = [
	{
		id: 1,
		name: 'Linux Torvalds'
	},
	{
		id: 2,
		name: 'Bill Gates'
	},
	{
		id: 3,
		name: 'Jeff Bezos'
	}
];

let salaries = [
	{
		id: 1,
		salary: 4000
	},
	{
		id: 2,
		salary: 1000
	},
	{
		id: 3
		// salary: 2000
	}
];

const getEmployee = (num) => {
	return new Promise((resolve, reject) => {
		let condition;
		for (let employe of employees) {
			if (employe.id === num) {
				condition = employe;
			}
		}
		if (condition) {
			resolve(condition);
		} else {
			reject(new Error('el empleado no existe'));
		}
	});
};

const getSalary = (employe) => {
	return new Promise((resolve, reject) => {
		let salaryEmploye;
		for (let salary of salaries) {
			if (salary.id === employe.id) {
				salaryEmploye = salary.salary;
			}
		}
		if (salaryEmploye) {
			resolve(salaryEmploye);
		} else {
			reject(new Error('error'));
		}
	});
};

async function employeeData(id) {
	try {
		const employee = await getEmployee(id);
		const salary = await getSalary(employee);
		return `El empleado ${employee.name}, recibe ${salary} € mensuales`;
	} catch (err) {
		console.log(err);
	}
}

employeeData(2).then(value => console.log(value));

//nivel 1, ejercicio 2

/* function getDate() {
	return new Promise((resolve) => {
		setTimeout(() => {
			const date = new Date();
			resolve(date.toDateString());
		}, 2000);
	});
}

async function date() {
	console.log(await getDate());
}

date(); */

//nivel 2, ejercicio 1

const double = (num) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(num * 2);
		}, 2000);
	});
};

async function addDoubles(num1, num2, num3) {
	const doubleNum1 = await double(num1);
	const doubleNum2 = await double(num2);
	const doubleNum3 = await double(num3);
	return(doubleNum1 + doubleNum2 + doubleNum3);
}

console.log(addDoubles(1, 2, 3));

//nivel 3,  ejercicio 1

getEmployee(4).catch((err) => console.log(err));
getSalary(3).catch((err) => console.log(err)); 
employeeData('hola')
addDoubles(' ', 6)

module.exports = { employeeData, double, addDoubles }