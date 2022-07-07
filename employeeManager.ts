export class EmployeeManager{
    manager=[];

    constructor() {
    }
    getManger=()=>this.manager;
    setEmployee=(employee)=>this.manager.push(employee);
    deleteSomeone=(firstname,lastname)=>{
        for(let i=0 ; i<this.manager.length; i++) {
            if (this.manager[i].firstname === firstname && this.manager[i].lastname === lastname) {
                this.manager.splice(i, 1)
            }
        }
        return this.manager
    }
    editSomeOne=(firstname,lastname,dateofbirth,address,position)=>{
        for (let i=0; i<this.manager.length;i++){
            if(this.manager[i].firstname === firstname && this.manager[i].lastname === lastname){
                this.manager[i].setDateOfBirth(dateofbirth);
                this.manager[i].setAddress(address);
                this.manager[i].setPosition(position);
            }
        }
    }
}