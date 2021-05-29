/*Find the maximum consecutive 1's in an array of 0's and 1's.*/
import React from 'react'

export default function Answer2() {
    const arr=[1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0];
    let j=0;
    for(let i=0;i<arr.length;)
    {
        let k=0;
        if(arr[i]===1)
            do
            {
                k++;
                console.log("k",k);
                i++;
            }while(arr[i]===1)
        if(k>j)
            j=k;
        i++;
    }
    console.log(j);
    return (
        <div>
            <h2>Number of consecutive ones in {arr} is {j}</h2>
        </div>
    )
}
