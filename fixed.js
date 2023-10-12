function prime_notprime(num)
{
    let count=0
    for(let i=1;i<=num;i++)
    if(num%1==0)
    {
        count+=1
    }
    if(count==2)
    {
        return true
    }
    else{
        return false
    }

}
a=prime_notprime(17)
if(a==true)
{
    console.log("prime number")
}
else{
    console.log("not prime number")
}