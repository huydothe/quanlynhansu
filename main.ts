import {Employee} from "./employee";
import {EmployeeManager} from "./employeeManager";

let employee1=new Employee('Huy','A','1/1/1999','Hà Nội','admin');
let employee2=new Employee('Huy','B','2/2/2000','Hà Nam','user');
let employee3=new Employee('Huy','C','3/3/2002','Hà tĩnh','other');

let manager=new EmployeeManager();
manager.setEmployee(employee1);
manager.setEmployee(employee2);
manager.setEmployee(employee3);

// console.log(manager.getManger());
// console.log(manager.deleteSomeone('Huy','B'));
// manager.editSomeOne('Huy','A','5/5/2004','QO','Other');
// console.log(manager.getManger())