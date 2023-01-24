import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { MenuItems } from './MenuItems';
import { AdressItems } from './AdressItems';
import Image from '../Image/logo-black.png';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
const Hover = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return <div className='w-full'>

    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

      <GoThreeBars className=' visible w-[2rem] h-[2rem] md:w-[3rem] md:h-[2.5rem] md:ml-[20rem] lg:collapse  text-2xl  ' />

    </div>
    <div className='w-full '> 
      {isHovering && <div className='w-full'>
        <ul className='w-screen'>
             <div className=' flex absolute top-0 left-0  z-50 w-[29rem] h-[61rem] '>
              <div className='  bg-black opacity-25 border-2  '>
jhblyugjhbuygb
              </div>
              <div className='float-right shadow-lg bg-white'>
              
                 <button type="button" class="btn close w-[2rem] text-4xl hover:bg-black"
                            data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>

                <img src={Image} alt="logo" className=' ml-[3rem] md:ml-[4rem] mt-[2rem]  w-[10rem]' />
                <ul className='mt-[2.5rem] md:ml-[3rem]'>
                  {MenuItems.map((item, index) => {
                    return <div>

                      <div>

                        <li key={index} className='p-[0.5rem] ml-[2rem] text-[1.2rem] uppercase font-bold divide-y-[2rem]'>
                          <a className={item.cname} href={item.url}>
                            {item.title}
                          </a>
                        </li>
                      </div>
                      </div>
                      
                  }
                  )}
                </ul>
                <h1 className='text-4xl font-bold ml-[4rem] md:ml-[5rem]'>Contact  Info</h1>
                {AdressItems.map((items, index) =>
                  <ul key={index} className='mt-[2rem] ml-[1.5rem] md:ml-[4rem]'>
                    <div className='flex'>
                      <div>
                        <li className='mr-[0.5rem] mt-[0.5rem]'>{items.icon}</li>
                      </div>
                      <div>
                        <li className=''>{items.subtitle}</li>
                      </div>
                    </div>

                  </ul>

                )}
                <div className='flex space-x-[1rem] mt-[1.5rem] ml-[1rem] md:ml-[5rem]'>
                  <AiFillFacebook className=' w-[2rem] h-[2rem]' />
                  <AiFillTwitterSquare className=' w-[2rem] h-[2rem]' />
                  <AiFillInstagram className=' w-[2rem] h-[2rem]' />
                  <AiFillLinkedin className=' w-[2rem] h-[2rem]' />
                  <AiFillYoutube className=' w-[2rem] h-[2rem]' />
                </div>
              </div>
              </div>
        </ul>

      </div>

      }
    </div>
  </div>

};

export default Hover;
