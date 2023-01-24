import { Information } from "./Information";
import Image from '../Image/logo-white.png';
import{AdressItems } from './AdressItems';
const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer className='bg-black text-white text-center lg:h-[50vh] h-[80vh] lg:w-full md:h-[55vh] md:w-[51rem] md:overflow-hidden'>
   
       <div className=" inline lg:flex lg:h-[40vh]  place-content-center lg:place-content-around  md:mt-[2rem]">
        <div className="text-left ml-4   lg:text-left h-[20vh] lg:h-[10vh] space-x-4 space-y-4 mt-[2rem] lg:mt-[0rem] md:mt-[3rem]">
       <img src={Image} alt="logo" className=" w-[15rem] h-[4vh] md:mr-[5rem]  mt-[5rem]"/>
       <div className="md:mr-[10rem] md:mt-[3rem]">
       {AdressItems.map((items,index) =>
     <ul key={index} className='lg:mt-[1.5rem]'>
  <li className="font-bold">{items.edtitle}</li>
    <li className="text-gray-400">{items.subtitle}</li>
   </ul>
 ) } 
 </div>
 </div> 
 <div className=" grid grid-cols-2 md:grid-cols-3 md:mt-[1rem] mt-[5rem] ml-4 md:mr-[2rem] lg:space-x-[20rem] lg:h-[65vh] md:h-[20vh] lg:flex ">
            {Information.map((items,index)=>
             <ul key={index} className='lg:float-left text-left'>    
                <li className="text-2xl text-bold mt-[2rem]">{items.infotitle}</li>
                <li className="hover:bg-red lg:mt-[1rem] text-gray-400 hover:text-white "><a href={items.url}>{items.firstinfo}</a></li>
                  <li className="lg:mt-[1.5rem] text-gray-400 hover:text-white"><a href={items.url}>{items.secondinfo}</a></li>
                  <li className="lg:mt-[1.5rem] text-gray-400 hover:text-white"><a href={items.url}>{items.thirdinfo}</a></li>
                  <li className="lg:mt-[1.5rem] text-gray-400 hover:text-white"><a href={items.url}>{items.fourthinfo}</a></li>
             </ul>
          )  }
          </div>
        </div>
        <div className="mt-[2rem] lg:mt-[1rem] border-t border-gray-400">
      
        {`Copyright © Kabstore ${year}`}
        </div>
    </footer>;
  };
  
  export default Footer;