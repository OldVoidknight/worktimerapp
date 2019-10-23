import React from 'react';


function Footer() {
  return (
    <div className='footer'>
     <div className='copyright'>&copy; 2019</div>
     <div className='company-name'>Powered By</div>
     <img src={require ('./assets/Voidbytes_Web.png')} alt='' width='30%' height='20%'></img>
    </div>
    
  );
}

export default Footer;