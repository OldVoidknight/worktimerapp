import React,{useState, useEffect} from 'react';
import Button from './Button';
import API from './API';

function Timer(props){
    console.log(props)
    const [status, setStatus]=useState(false)
    const [start,setStart]=useState('')
    const [seconds, setSeconds]=useState(0)
    const [storeTime, setStoreTime]=useState(false)
    const [hoursWorked,setHoursWorked]=useState(0)

    
    useEffect(()=>{
        if(status){
            let timerID = setInterval( () => tick(), 1000 );
            return function cleanup() {
            clearInterval(timerID);}
        } 
    },[status])

    useEffect(()=>{
        let time=new Date().toUTCString()
        setStart(time.substring(17,25))
    },[storeTime])

    useEffect(()=>{
        setHoursWorked((seconds/3600).toFixed(2))
    },[seconds])

    const getcookie=(name)=>{
        let value=";"+document.cookie;
        let parts=value.split(";"+name+"=");
        if (parts.length===2) {
            return parts.pop().split(";").shift()
        }
    }

    const handleSave=()=>{
        setHoursWorked(hoursWorked)

        let form=new FormData(),pps
        form.append('recid',props.location.id)
        form.append('time',hoursWorked)
        pps='{"recid":"n","time":"n"}'

        form.append('a','add')
        form.append('s','ad')
        form.append('df','sp_jobschedule_edit')
        form.append('m','l')
        form.append('dd',pps)
        form.append('ssi',getcookie('_appcookie'))
        form.append('uid','3')
        fetch(API.variables.api,{method:'post', body:form})
        .then(res=>res.json())
        .then(rd=>{
        if (rd.success) {
            
        } 
        },error=>{
            console.log(error)
         });
         props.history.push('/dashboard')
    }

   
    const toggle=()=>{
        setStatus(!status)
        setStoreTime(true) 
    }
    const getReset=()=>{
        setStatus(false)
        setStoreTime(false)
        setSeconds(0)
        setHoursWorked(0)
    }
    function tick() {
        setSeconds(seconds=>seconds+1);
    }
   
   

    return (
        <div className='timer-container'>
            <div className='timer'>
                <div className='card'>{start?start:"Start"}</div>
                <div className='card' >{seconds}</div>
                <div className='card'>{hoursWorked} Hours</div>
            </div>
            <div className='start-stop'>
            <Button title={status? "Stop":"Start"} onClick={toggle}/>
            <Button title='Reset' onClick={getReset}/>
            <Button title='Save' onClick={handleSave}/>
            </div>
            
        </div>
    )
}


export default Timer;