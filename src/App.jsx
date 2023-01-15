import React from 'react';
import './App.css';
import Image from './Image/logo-black.png';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Adress from './components/Adress';
import Footer from './components/Footer';
import {FaInstagram} from "react-icons/fa";
import {FaGreaterThan} from "react-icons/fa";
import Hover from "./components/Hover";
function App()
{

  return <div className="App font-san-serif font-light overflow-x-hidden lg:overflow-hidden ">  
      
    <h1 className='lg:bg-black-0 lg:text-xs lg:ml-[20rem] lg:mt-4 collapse lg:visible'>+250 788 458 897</h1>
   <div>
    <div className='vl collapse lg:visible'><FaInstagram className='lg:ml-4 lg:mt-2 collapse lg:visible'/></div>
    <hr className='line lg:mt-4  collapse lg:visible'/>
 
    <div className="lg:flex  space-x-[1rem] lg:space-x-[5rem] lg:h-24 h-[1rem]">
    
      <div className=' lg:h-[5rem] lg:ml-32  h-[3rem] flex '>
    <img src={Image} alt="logo" className='lg:w-[15rem] lg:mt-8 ml-[1rem]  w-[12rem]'/>
    <div>
      <Hover/>
    </div>
    </div>
    
    <SearchBar />
    <Navbar />
  
    </div>
    <div className='bg-blue-40 mt-24 bg-stone-50 lg:h-32 h-[6rem]'>
      <h1 className='text-2xl lg:ml-40 ml-[1rem]'>CONTACT PAGE</h1>
      <div className='flex space-x-8 mt-4 lg:ml-40 ml-[1rem]'>
     <h2>Home</h2>
    <FaGreaterThan className='font-light mt-2'/>
     <span>Contact Page</span>
     </div>
    </div>
    <div className='lg:flex lg:place-content-around h-[160vh] lg:h-[130vh]'>
   <Adress/>
   <Form/>
   </div>
    <Footer/>
    </div>
    </div>
}
export default App;