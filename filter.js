// Traditional way or lengthy way to do it

// const arr=[1,2,3,4,5,6];

// const newArr=[];

// for(let i=0;i<=arr.length;i++)
// {
//     if(arr[i]%2==0)
//         newArr.push(arr[i])
// }
// console.log(newArr)


//Better way using filer function

const arr=[1,2,3,4,5,6];

function filerarr(n)
{
    if(n%2==0)
    {
        return true
    }
    else{
        false
    }
}

const ans=arr.filter(filerarr)
console.log(ans)



//another way of writing this 


// const arr=[1,2,3,4,5,6];



// const ans=arr.filter(function(n)   {  
//     if(n%2==0)
//   { return true }   
//      else
//    {  false }
// })
// console.log(ans)


//For String data type


const arr1= ["Ayush" ,"Aman","Amal","Rahul","kunal","Gaurav"]


    const ans1=arr1.filter(function(n)
    {
if(n.startsWith('A'))
{
    return true;
}
else {return false;

}
})
console.log(ans1)