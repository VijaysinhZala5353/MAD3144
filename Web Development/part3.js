function summation(a,b)
{
    var start = a;
    var end = b;
    var sum = 0;
    while(a<=b)
    {
        sum += a;
        a++;
    }
    document.write(sum)
}

summation(1,10)