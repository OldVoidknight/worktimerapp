import React, {useState} from 'react';
import Button from './Button';
import Input from './Input';
import Footer from './Footer';
import API from './API';

function Report(props){

    const [value,setValue]=useState({customer:'',jobtitle:''})


    const handleChange=(e)=>{
        setValue({...value,[e.target.name]:e.target.value})
    }

    const getcookie=(name)=>{
        let value=";"+document.cookie;
        let parts=value.split(";"+name+"=");
        if (parts.length===2) {
            return parts.pop().split(";").shift()
        }
    }

    const apipdf=(params,filename)=>{
        let newBlob= new Blob([params], {type: "application/pdf"});
        if (window.navigator && window.navigator.msSaveOrOpenBlob){
            window.navigator.msSaveOrOpenBlob(newBlob);
            return;
        }
        console.log(params,filename)
        const data=window.URL.createObjectURL(newBlob);
        let link=document.createElement('a');
        link.href=data;
        // let fnm=filename ? filename.split(';')[1].split('=')[1].replace(/"/g,''):'file.pdf';
        link.download='report.pdf';
        window.open(link)
    }

    const toReturn=()=>{
        props.history.push('/dashboard')
    }



    const generateReport=()=>{
        let form=new FormData(),props
        form.append('cus', value.customer)
        form.append('jtl', value.jobtitle)
        props='{"cus":"t","jtl":"t"}'

        form.append('a','jobschedule')
        form.append('s','rp')
        form.append('df','sp_jobschedule_find')
        form.append('m','l')
        form.append('dd',props)
        form.append('ssi',getcookie('_appcookie'))
        form.append('uid','3')
        fetch(API.variables.api,{method:'post', body:form})
        .then(res=>[res.blob(), res.headers.get('content-dispositon')])
        .then((blob)=>{
            blob[0].then(file=>{
                console.log(file)
                apipdf(file,blob[1])
            })
        },error=>{
            console.log(error)
         });
    }



    return(
        <div className='report-container'>
            <div className='tab'>
                <label>Report</label>
            </div>
            <div className='wrapper'>
                <Input type='text' placeholder='Name of Customer' value={value.customer} onChange={handleChange}/>
                <Input type='text' placeholder='Job Description' value={value.jobtitle} onChange={handleChange}/>
                <Button title='Generate Report' onClick={generateReport}/>
                <Button title='Return' onClick={toReturn}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Report;