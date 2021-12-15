import React from 'react'
import {Mydata} from '../data'





export default function page2() {
    return (
        <div>
             <table class="table">
        <thead>
            <tr>
                <th scope='col'>USERID</th>
                <th scope='col'>ID</th>
                <th scope='col'>TITLE</th>
                <th scope='col'>COMPLETED</th>
                
            </tr>
        </thead>
        <tbody>
        
        {Mydata.map((element,i)=>(
         <tr>
         <th>{element.userId} </th>
         <th>{element.id} </th>
         <th>{element.title} </th>
         <th>{element.completed} </th>
        </tr>
       ) )}
       console.log({Mydata.completed})
       </tbody>
       
       
    </table>
        </div>
    )
}
