var sum = 0;
function total(a,b)
{
    for(i=a; i<=b; i++)
    {
        sum += i;
        console.log(i)
    }
    return sum;
}
total(1,10)