

let num
let temp=0
let no=num
num = prompt("Enter Number :")

for(let i=2;i<num-1;i++)
{
    if(num%i==0)
    {
        temp=temp+1
    }
}
if(temp==0)
{
    console.log("prime");
}
else{
    console.log("not prime");
}


