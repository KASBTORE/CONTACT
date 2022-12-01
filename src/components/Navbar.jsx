import React from 'react';
import {MenuItems} from './MenuItems';

class Navbar extends React.Component{
  render(){
    return(
      <nav className='navbarItem'>
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
            <div className=''>
              <li className='text-3xl'>{item.ntitle}</li>
              <li>{item.stitle}</li>
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