/*Write a code to sort the object by id */
import {React,useState} from 'react'
export default function Answer5() {
    const [istate,fstate]=useState({obj :[
        {id : 4, name : "abc",},
        {id : 10, name : "ab2",},
        {id : 5, name : "abc3",},
        {id : 6, name : "abc5"}
    ]})
    console.log(istate.obj);
    const sort=()=>{
        let s=[...istate.obj]
        console.log(s);
        for(let i= 0;i<s.length;i++)
        {
            console.log(s[i]);
        for(let j=i+1;j<s.length;j++)
            if(s[i].id>s[j].id)
            {
                console.log("Swapping of ",s[j]," and ",s[i]);
                let temp=s[j]
                s[j]=s[i]
                s[i]=temp
            }
        }
        fstate({obj:s})
        console.log(istate);
    }
    return (
        <div className="centeralign">
            <table>
            <tr><td><h1>Here is the Objects' array</h1></td></tr>
                        {istate.obj.map((x,index)=>(
                         <tr key={index}>   
                        <td>id: {x.id},
                        name: {x.name}</td>
                        </tr>
                        ))}
            </table>
            <button onClick={sort}>Click here to sort the array</button> 
        </div>
    )
}
