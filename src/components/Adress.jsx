import React from 'react';
import {AdressItems} from './AdressItems';
class Adress extends React.Component{
  render(){
    return(
<div className=' w-[30rem] h-[50vh] mt-32 ml-32'>
    <h1 className=' text-4xl text-center'>Find Us Here</h1>
    {AdressItems.map((items,index) =>
     <ul key={index} className='mt-8'>
  <li className='text-2xl font-medium'>{items.edtitle}</li>
  <li className='mt-4'>{items.subtitle}</li>
   </ul>
 ) }   
</div>
    )
  }
}
export default Adress