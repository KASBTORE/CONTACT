import React from 'react';
import './App.css';
import Image from './Image/logo-black.png';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar'
import Form from './components/Form';
import Adress from './components/Adress';
import Footer from './components/Footer';
import {FaInstagram} from "react-icons/fa";
function App() {
  return <div className="App font-serif">
     
        <div>
    <h1 className='bg-black-0 text-xs ml-[20rem] mt-4'>+250 788 458 897</h1>
    <FaInstagram/>
    <div className='vl'></div>
    <hr className='line mt-4'/>
    <div className="flex  space-x-[5rem] h-24">
      <div className=' h-32 ml-32'>
    <img src={Image} alt="logo" className='w-[15rem] mt-8'/>
    </div>
    <SearchBar />
    <Navbar/>
    </div>
    <div className='bg-blue-40 mt-24  bg-stone-50 h-32'>
      <h1 className='text-2xl ml-40'>CONTACT PAGE</h1>
      <div className='flex space-x-8 mt-4 ml-40'>
     <h2>Home</h2>
     <span>Contact Page</span>
     </div>
    </div>
    <div className='flex place-content-around h-[100vh]'>
  
   <Adress/>
   <Form/>
   </div>
    <Footer/>
    </div>

    </div>
  
}

export default App;
