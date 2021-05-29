/*Let’s see we an api url https://my-json-server.typicode.com/typicode/demo/posts
Write a sample code to call this rest api and display the result.*/
import {React,useEffect,useState} from 'react'
import axios from 'axios'
export default function Answer4() {
    const [istate,fstate]=useState({
        userdata:[],   
    })
    useEffect(()=>{
        axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then((res)=>{
        console.log(res.data);
        fstate({userdata:res.data});
        console.log(istate);
        }).catch((err)=>{ console.log(err);})},[])
    return (
        <div>
            <h4>displaying data from https://my-json-server.typicode.com/typicode/demo/posts</h4>
            <table className="tablealign">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
                {istate.userdata.map((x,index)=>(
                    <tr key={index}>   
                        <td>{x.id}</td>
                        <td>{x.title}</td>
                    </tr>
                ))}
            </table> 
        </div>
    )
}
