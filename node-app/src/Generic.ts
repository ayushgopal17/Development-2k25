// function input<T>(arg:T) {
//     return arg
// }

// let input1=input<number>(100);
// let input2=input<String>("hi");

function getFirstElement<T>(arr: T[]): T {
 return arr[0];
}
interface User{
    name: String;
}
  const el=getFirstElement<User>([{name:"Ayush"}]);
  el.name
   const el2=getFirstElement([1,2]);