import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';

function Table(props){
    
    const [data,setReturnData] =useState([])
    const deleteData=(value)=>{
        // let form = new FormData()
        // form.append('id', value.id)
        // form.append('action','delete')
        // form.append('file','todo')

        // form.append('m','l')
        // form.append('uid','3')
        // fetch('',{method:'post', body:form})
        // .then(res=>res.json())
        // .then(rd=>{
        //     setReturnData(rd.rd)
        // });
    }

    return(
        <div className='table-inner'>
                    <table className='timetable'>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Rate Per Hour</th>
                                <th>Total Time</th>
                                <th>Amount(GH₵)</th>
                                <th>Actions</th>
                            </tr>
                            {
                                props.data.map((data,key)=>{
                                    return( 
                                        <tr key={key}>
                                        <td>{data.customer}</td>
                                        <td>{data.jobtitle}</td>
                                        <td>{data.rateperhour}</td>
                                        <td>{data.totaltime}</td>
                                        <td>{(data.rateperhour*data.totaltime).toFixed(2)}</td>
                                        <td>
                                            <Link to={{pathname:''}}>Edit</Link>
                                            <Link to={{pathname: '/timer/'+data.recid,id:data.recid}}>Start</Link>
                                            <Button title='Delete' onClick={deleteData(data)}/>
                                        </td>
                                        </tr>
                                    )
                                })
                            }  
                        </tbody>
                    </table>
        </div>
    )

}



export default Table;