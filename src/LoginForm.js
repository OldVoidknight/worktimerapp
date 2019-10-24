import React,{useState} from 'react';
import Input from './Input';
import Footer from './Footer';
import PopUp from './PopUp';
import API from './API';

function LoginForm(props){

    const [value,setValue]=useState({username:'',password:''})
    const [showPop,setShowPop]=useState(false)    
    
    
    
    const onChange=(e) =>{
        setValue({...value,[e.target.name]:e.target.value})}
    

    const togglePopup=()=>{
        setShowPop(!showPop)
    }

    const validatelogin=(e)=>{
        e.preventDefault()
        if (value.username===''||value.password==='') {
            togglePopup()  
        } else {
            
        }
        signin()
    }


    const getcookie=(name)=>{
        let value=";"+document.cookie;
        let parts=value.split(";"+name+"=");
        if (parts.length===2) {
            return parts.pop().split(";").shift()
        }
    }

    const signin=(name) =>{
        let form = new FormData()
        form.append('unm', value.username)
        form.append('pwd',value.password)
        form.append('a','authverify')
        form.append('s','auth')
        form.append('ctx','2')
        form.append('m','l')
        form.append('ssi',getcookie(name))
        props.history.push('/dashboard')
        // fetch(API.variables.api,{method:'post', body:form})
        // .then(res=>res.json())
        // .then(rd=>{
        //     if (rd.success) {
        //         props.history.push('/dashboard')
        //         localStorage.setItem('loggedinStatus',JSON.stringify(true))
        //     }
        // },error=>{
        //     console.log(error)
        //  });
        }

   
    return(
        <div className='login-container'>
            {showPop? <PopUp text='Please check fields and try again' onClick={() => setShowPop(false)}/>:null}
            <form className='login'>
                <div className='login-inputs'>
                <label>Username</label>
                <Input name='username' type='text' placeholder='Kofi' value={value.username} onChange={onChange}/>
                <label>Password</label>
                <Input name='password' type='password' placeholder='********' value={value.password} onChange={onChange}/>
                </div>
                <div className='login-buttons'>
                <button onClick={validatelogin}>Sign In</button>
                </div>
            </form>
            <Footer/>
        </div>
    )
}






export default LoginForm;