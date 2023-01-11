import React from 'react';
import {MenuItems} from './MenuItems';
class Navbar extends React.Component{
 
  
  render(){
    return(
      <nav className='navbarItem collapse lg:visible'>
        <ul className='flex space-x-24 mt-10'>
          {MenuItems.map((item,index)=>{
            return <div>
              <div>
              <div>
          
           <li key={index}>
            <a className={item.cname} href={item.url}>
            {item.title}
            </a> 

            </li>
            </div>
            <div className='flex'>
             <span className='mt-4 mr-4 text-3xl'>{item.icon}</span>
             <div>
              <li className='text-3xl flex space-x-8'> {item.ntitle}</li>
              <li> {item.stitle}</li>
              </div>
              </div>
           </div>
            </div>
          }
          )} 
        </ul>
      
      </nav>
    )

  }

}
export default Navbar;


