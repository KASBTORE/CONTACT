import React, {useState} from 'react';
import {GoThreeBars} from 'react-icons/go';
import { MenuItems } from './MenuItems';

const Hover = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

return <div>
   
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
    
    <GoThreeBars className=' visible w-[2rem] float-left lg:collapse  ml-[8rem] text-2xl'/>

        </div>
     

        {isHovering && <div className='text-black'>
        <ul>
          {MenuItems.map((item,index)=>{
            return <div>
           
              <div className='w-[20rem] h-full shadow-md bg-white absolute'>
          
           <li key={index}>
            <a className={item.cname} href={item.url}>
            {item.title}
            </a> 
            </li>
            <h1>Contact  Info</h1>
           </div>
            </div>
          }
          )} 
        </ul>

        </div>
           
           } 
            
    
     
  
   </div>

}; 

export default Hover;
