import React from 'react';
import {AdressItems} from './AdressItems';

class Adress extends React.Component{
  render(){
    return(
<div className=' lg:w-[30rem] lg:h-[50vh] h-[50vh] lg:mt-32 mt-[5rem] lg:ml-32 ml-8'>
    <h1 className=' text-4xl text-center'>Find Us Here</h1>
    {AdressItems.map((items,index) =>
     <ul key={index} className='mt-8'>
      <div className='flex mt-[6rem]'>
     <div>
  <li className='mt-4 mr-6 p-[10px] pb-[0px] h-[2.5rem] border'>{items.icon}</li>
  </div>
  <div>
  <li className='text-2xl font-medium'>{items.edtitle}</li>
  <li className='mt-4'>{items.subtitle}</li>
  </div>
  </div>
  
  
   </ul>
 ) }   
</div>
    )
  }
}
export default Adress