import React from 'react';
import {MenuItems} from './MenuItems';
class Navbar extends React.Component{
 
  
  render(){
    return(
      <nav className='navbarItem  collapse lg:visible lg:content-center'>
        <ul className='lg:flex lg:space-x-[4rem]  lg:mt-10 lg:items-center'>
          {MenuItems.map((item,index)=>{
            return <div>
              <div>
              <div>
           <li key={index} >
            <a className={item.cname} href={item.url}>
            {item.title}
            </a> 
            </li>
            </div>
            <div className='flex items-center'>
             <span className='mt-2 mr-4 text-2xl font-bold '>{item.icon}</span>
             <div>
              <li className='text-2xl flex  '> {item.ntitle}</li>
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


