function prime(num)
{
    let count=0
    for(let i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            count+=1
        }

    }
    if(count==2)
    {
        return true
    }
    else{
        return false
    }
}
b=prime(3)
if(b==true)
{
    console.log("prime num")
}
else{
    console.log("not a prime")
}