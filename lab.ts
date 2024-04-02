// 1. Create array that accepts number only
const numbersArray: number[] = [1, 2, 3, 4, 5];

// 2. Create array that accepts string and number only and print all items
const mixedArray: (string | number)[] = ['a', 1, 'b', 2, 'c', 3];
mixedArray.forEach(item => console.log(item));

// 3. Create a variable that accepts number and Boolean only
let numOrBool: (number | boolean);
numOrBool = 10;
console.log(numOrBool);
numOrBool = true;
console.log(numOrBool);

// 4. Create function with two parameters, try to call it without any parameter “handling”
function sampleFunction(param1: number, param2: string) {
    console.log(param1, param2);
}

try {
    sampleFunction(); // This will throw an error
} catch (error) {
    console.error("Error:", error);
}

// 5. Create class Employee implementing IEmployee interface
interface IEmployee {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

class Employee implements IEmployee {
    private _username: string;
    public address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };

    constructor(
        public id: number,
        public name: string,
        username: string,
        public email: string,
        address: {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
            geo: {
                lat: string;
                lng: string;
            };
        }
    ) {
        this._username = username;
        this.address = address;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }
}

const employeeData = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    }
};

const employee = new Employee(
    employeeData.id,
    employeeData.name,
    employeeData.username,
    employeeData.email,
    employeeData.address
);

console.log(employee);

// 6. Create class Manager inheriting from Employee class
class Manager extends Employee {
    constructor(
        id: number,
        name: string,
        username: string,
        email: string,
        address: {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
            geo: {
                lat: string;
                lng: string;
            };
        }
    ) {
        super(id, name, username, email, address);
    }

    viewEmployeeAddress(employee: Employee) {
        console.log(employee.address);
    }
}

const manager = new Manager(
    2,
    "John Doe",
    "john.doe",
    "john.doe@example.com",
    {
        street: "Sunset Blvd",
        suite: "Apt. 123",
        city: "Los Angeles",
        zipcode: "90001",
        geo: {
            lat: "34.0522",
            lng: "-118.2437"
        }
    }
);

manager.viewEmployeeAddress(employee);
//Q7

interface IAccount{
    Date_of_opening: String
    addCustomer():void
    removeCustomer():void
}
class Acount{
    Acc_no:string
    Balance:number
    constructor( Balance:number){
       this. Balance=Balance
    }
    debitAmount():void{
        console.log("debitAmount")
    }

    creditAmount():void{
        console.log("creditAmount")
    }
    getBalance():void{
        console.log("getBalance")
    }
}

class Saving_Account extends Acount implements IAccount{
    Date_of_opening: String
    Min_balance:number
    constructor(balance: number,Min_balance:number){
        super(balance)
        this.Min_balance=Min_balance
    }
    addCustomer():void{
        console.log("addCustomer for Saving_Account")
    }
    removeCustomer():void{
        console.log("removeCustomer for Saving_Account")
    }
    
}

class Current_Account extends Acount implements IAccount{
 

    Date_of_opening: String
    interest_rate:number
    constructor(balance: number,interest_rate:number){
        super(balance)
        this.interest_rate=interest_rate
    }
    addCustomer():void{
        console.log("addCustomer for Current_Account")
    }
    removeCustomer():void{
        console.log("removeCustomer for Current_Account")
    }
    
}


let acc= new Saving_Account(300,100)
acc.addCustomer()