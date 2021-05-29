/*Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array. 
Do not use any library functions, need to do via for loops only*/
import React from 'react'
export default function Answer1() {
    const arr=[11,12,13,14,15,16,17,18,19,20]
    console.log(arr);
    const even=[]
    let i=0
    for(let a of arr)
    {
        if(a%2===0)
            even[i++]=a
    }
    console.log(even);
    return (
        <>
            <h2>The array elements are-</h2>
            <div className="centeralign">
            {arr.map((e,index)=><b key={index}>{e}{"  "}</b>)}
            </div>
            <h2>Even numbers from the array elements are-</h2>
            <div className="centeralign">
            {even.map((e,index)=><b key={index}>{e}{"  "}</b>)}
            </div>
        </>
    )
}
