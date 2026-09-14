// Type Annotations
let id: number = 5;
let company: string = "Acme Corp";
let isPublished: boolean = true;

let ids: number[] = [1, 2, 3, 4, 5];
let x: any = "pedro";
let xArr: any[] = ["pedro, 0, true"];

const concatenateValues = (a: string, b: string): string => {
  return a + b;
};

// Interfaces and Types

interface UserInterface {
  id: number;
  name: string;
  age?: number;
  greet(message: string): void;
}

const User: UserInterface = {
  id: 2,
  name: "Pedro",
  age: 22,
  greet(message) {
    console.log(message);
  },
};

if (!User.age) {
  console.log("No age");
} else {
  console.log(User.age);
}

User.greet("Hello bitch");

// Unions and Intersections
type IDFieldType = string | number;

const printID = (id: IDFieldType) => {
  console.log("ID: " + id);
};

printID(234231234);

interface BusinessPartner {
  name: string;
  creditScore: number;
}

interface UserIdentity {
  id: number;
  email: string;
}

type Employee = BusinessPartner & UserIdentity;

const signContract = (employee: Employee): string => {
  const message = `Contract signed by ${employee.name} with credit score: ${employee.creditScore}. Email: ${employee.email}`;
  console.log(message);
  return message;
};

signContract({
  name: "Pedro",
  creditScore: 800,
  email: "pedro@gmail.com",
  id: 34,
});

// Enums
// unauthorized, user doesn't exist, wrong credentials, internal
// enum LoginError {
//   Unauthorized = "unauthorized",
//   NoUser = "nouser",
//   WrongCredentials = "wrongcredentials",
//   Internal = "internal",
// }

// const printErrorMsg = (error: LoginError) => {
//   if (error == LoginError.Unauthorized) {
//     console.log("User not authorized");
//   } else if (error == LoginError.NoUser) {
//     console.log("No user was found.");
//   } else if (error == LoginError.WrongCredentials) {
//     console.log("Wrong username/password combination.");
//   } else {
//     console.log("Internal Error.");
//   }
// };

// printErrorMsg(LoginError.WrongCredentials);

// Generics
class StorageContainer<T> {
  private contents: T[];

  constructor() {
    this.contents = [];
  }

  addItem(item: T): void {
    this.contents.push(item);
  }

  getItem(idx: number): T | undefined {
    return this.contents[idx];
  }
}

const usernames = new StorageContainer<string>();
usernames.addItem("pedrotech");
usernames.addItem("echobr");
console.log(usernames.getItem(0));

const friendscount = new StorageContainer<number>();
friendscount.addItem(12);
friendscount.addItem(65);
console.log(friendscount.getItem(0));

// Readonly variables
interface Employee2 {
  readonly employeeId: number;
  readonly startDate: Date;

  name: string;
  department: string;
}

const employee2: Employee2 = {
  employeeId: 123,
  startDate: new Date(),
  name: "Pedro",
  department: "Finance",
};

employee2.name = "Jessica";

console.log(employee2);

const TypescriptPage = () => {
  return (
    <div>
      <p>{concatenateValues("Hello ", "world")}</p>
      <p>{concatenateValues("5", "10")}</p>
      <p>{User.age}</p>
      <p>
        {signContract({
          name: "Pedro",
          creditScore: 800,
          email: "pedro@gmail.com",
          id: 34,
        })}
      </p>
    </div>
  );
};

export default TypescriptPage;
