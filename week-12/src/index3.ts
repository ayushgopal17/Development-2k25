// readonly

type User={
     name:string;
     age:number;
}

const user:Readonly <User>={
    name:'john',
    age:21
}

//you can not reassign it coz it is in readonly mode 

// obj.name='asd';