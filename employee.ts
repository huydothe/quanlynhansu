export class Employee {
    firstname:string;
    lastname:string;
    dateofbirth:string;
    address: string;
    position: string;

    constructor(firstname: string, lastname: string, dateofbirth: string, address: string, position: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateofbirth = dateofbirth;
        this.address = address;
        this.position = position;
    }
    getFirstName=()=>this.firstname;
    getLastName=()=>this.lastname;
    setDateOfBirth=(dateofbirth)=>this.dateofbirth=dateofbirth;
    setAddress=(address)=>this.address=address;
    setPosition=(position)=>this.position=position;
}