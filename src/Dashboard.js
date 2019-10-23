import React,{useState,useEffect} from 'react';
import Button from './Button';
import Input from './Input';
import Table from './Table';
import PopUp from './PopUp';
import API from './API';


function Dashboard(props){
    const [value,setValue]=useState({e_name:'',phone:'',e_title:'',rate:''})
    const [data,setData]=useState([])
    const [showPop,setShowPop]=useState(false)
    
    //Prototype For This App
    //Ok done
    
    useEffect(()=>{
        let form=new FormData()
        let props;

        form.append('recid','')
        form.append('name','')
        props='{"recid":"t","name":"t"}'
        

        form.append('a','find')
        form.append('s','fd')
        form.append('df','sp_jobschedule_find')
        form.append('m','l')
        form.append('dd',props)
        form.append('ssi',getcookie('_appcookie'))
        form.append('uid','3')
        fetch(API.variables.api,{method:'post', body:form})
        .then(res=>res.json())
        .then(rd=>{
            setData(rd.sd)
        },error=>{
            console.log(error)
         });
    },[])

    const toReport=()=>{
        props.history.push('/report')
    }
    
    const togglePopup=()=>{
        setShowPop(!showPop)
        setValue({e_name:'',phone:'',e_title:'',rate:'0'})
    }

    const route=(id)=>{
        props.history.push('/timer/'+id)
    }

    const onChange=(e) =>{
        setValue({...value,[e.target.name]:e.target.value})}

    const validate=(e)=>{
        e.preventDefault()
        if (value.e_name===''||value.e_title===''||value.phone===''||value.rate==='') {
            alert('Please fill all necessary fields')
        } else {
            submit()
        }
    }
    
    const getcookie=(name)=>{
        let value=";"+document.cookie;
        let parts=value.split(";"+name+"=");
        if (parts.length===2) {
            return parts.pop().split(";").shift()
        }
    }
    
    const submit=()=>{
        let form=new FormData(),props
        form.append('cus', value.e_name)
        form.append('pho',value.phone)
        form.append('jtl', value.e_title)
        form.append('rph', value.rate)
        props='{"cus":"t","pho":"t","jtl":"t","rph":"n"}'

        form.append('a','add')
        form.append('s','ad')
        form.append('df','sp_jobtitle_add')
        form.append('m','l')
        form.append('dd',props)
        form.append('ssi',getcookie('_appcookie'))
        form.append('uid','3')
        
        fetch(API.variables.api,{method:'post', body:form})
        .then(res=>res.json())
        .then(rd=>{
            console.log(rd)
        if (rd.success) {
            setData(rd.sd)
            setValue({e_name:'',phone:'',e_title:'',rate:''})
        } else {
            alert("Transaction Incomplete")
        }
        },error=>{
            console.log(error)
         });
         togglePopup()
    }
    
    const logout=(e)=>{
        e.preventDefault()
        localStorage.removeItem('loggedinStatus')
        window.location.reload()
        setTimeout(()=>
        {
        
        },3000)
    }
     
    return (
        <div className='dashboard-container'>
            <div className='dash-header'>
                <Button title='Report' onClick={toReport}/>
                <Button title='Logout' onClick={logout}/>
            </div>
            {showPop? <PopUp text='Your Data Has Been Saved' onClick={() => setShowPop(false)}/>:null}
            <div className='dash-employee'>
                <div className='emp-inner'>
                    <label>Name</label>
                    <Input name='e_name' type='text' placeholder='Your Name Here' value={value.e_name} onChange={onChange}/>
                    <label>Phone Number</label>
                    <Input name='phone' type='text' placeholder='xxxxxxxxxx' maxlength={10} value={value.phone} onChange={onChange}/>
                    <label>Title</label>
                    <Input name='e_title' type='text' placeholder='Your Job For The Day' value={value.e_title} onChange={onChange}/>
                    <label>Rate per Hour</label>
                    <Input name='rate' type='number' value={value.rate} onChange={onChange} />
                    <Button title='Submit' onClick={validate}/>
                </div>
            </div>
            <div className='dash-table'>
                <Table data={data} route={route}/>
            </div>   
            
        </div>
    )
}


export default Dashboard;