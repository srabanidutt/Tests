/*Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are 
consecutive. Each number only occurs once in the array except one number which occurs twice. Write a js code 
to find the repeated number.*/
import React from 'react'
export default function Answer3() {
    //creating the array of 101 integers
    const arr=[]
    for(let i=0;i<101;i++)
    {
        arr[i]=i;
        if(i===7)
            arr[++i]=i-1    //adding twice occurance of a number manually
    }
    console.log(arr);
    //finding the repeated number
    var r;
    for(let i=0;i<101;i++)
    {
        if(arr[i]-arr[i-1]===0)
            r=arr[i]    //adding twice occurance of a number manually
    }
    console.log(r);
    return (
        <div>
            <h2>The array elements are-</h2>
            <div className="centeralign">
            {arr.map((e,index)=><b key={index}>{e}{" "}</b>)}
            </div>
            <h2>Repeated number in this array is {r}</h2>
        </div>
    )
}
