// PROGRAM 1 FIZZBUZZ

function checkDivisible()
{
    for(i=0;i<=100;i++)
    {
        if(i%3==0 && i%5==0)
            console.log("FizzBuzz");
        else if(i%3==0)
            console.log("Fizz");
        else if(i%5==0)
            console.log("Buzz");
        else
        console.log(i);
    }
} 
checkDivisible();

// PROGRAM 2 PALINDROME

function isPalindrome(str)
{  
    let safe=str;
    for(front=0,rear=str.length-1;front<=rear;front++,rear--)
    {
        let temp=str[front];
        str[front]=str[rear];
        str[rear]=temp;
    }
    
    if(safe==str)
        console.log(str+" is Palinrome");
    else
    console.log(str+" is not Palinrome");
}
isPalindrome("TaT")


// PROGRAM 3 Largest Number

function LargestArray()
{
    let max=arr[0];
    for(i=1;i<=arr.length;i++)
    {
        if(arr[i]>max)
            max=arr[i];
    }

    console.log(max);
}
let arr =[10,20,30,40,50]
LargestArray(arr);


// PROGRAM 4 STRING



// PROGRAM 5  LONGEST WORD IN STRING

function longestWord(str)
{
    str1 = str.split(" ");
    let temp=str1[0];
    for(i=1;i<str1.length;i++)
    {   
        if(str1[i].length>temp.length)
            temp=str1[i];
    }
    console.log(temp);
    
}
longestWord("Hello Welcome to Javascript")


// PROGRAM 6 FACTORIAL

function factorial(num)
{  
    let fact=1;
    for(i=num;i>=1;i--)
        fact = fact*i;
    console.log(fact);
}
factorial(5);


// PROGRAM 7  CONVERT CELSIUS TO FAHRENHEIT

function ConvertFahrenheit(temp)
{
    let fah = (9/5)*temp+32;
    console.log(fah);
}
ConvertFahrenheit(32);


// PROGRAM 8 FIND MISSING VALUE

function MissingValue(arr1)
{
   for(i=0;i<arr.length+2;i++)
   { 
    
     arr1[i]=i;
    
   }
   console.log(arr1);
}
let arr1=[0,1,2,4,5,6]
MissingValue(arr1)


