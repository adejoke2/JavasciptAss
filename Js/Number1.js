var Doctor ={ 
    firstname:"Ayo",
    lastname:"Kunle",
    Age:43,
    Address:"Ladoke street Shimawa",
    Email:"Kunle@gmail.com",
    PrintFullName:function(){
        return this.lastname + " "+ this.firstname;
    },
    PrintAge:function(){
        return this.Age + 5
    }
}
console.log(Doctor.PrintFullName());
console.log(Doctor.PrintAge());