import { Information } from "./Information";
import Image from '../Image/logo-white.png';
import{AdressItems } from './AdressItems';
const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer className='bg-black text-white text-center h-[40vh]'>
   
       <div className="flex place-content-around">
        <div className="text-left">
       <img src={Image} alt="logo" className=" w-[15rem] h-[5vh] mt-24"/>
       {AdressItems.map((items,index) =>
     <ul key={index}>
  <li>{items.edtitle}</li>
    <li>{items.subtitle}</li>
   </ul>
 ) } 
 </div> 
 <div className="space-x-[20rem] h-[35vh] w-[80rem] ">
            {Information.map((items,index)=>
             <ul key={index} className='float-left  text-left mt-24'>    
                <li className="text-2xl text-bold space-y-[10rem]">{items.infotitle}</li>
                <li>{items.firstinfo}</li>
                  <li>{items.secondinfo}</li>
                  <li>{items.thirdinfo}</li>
                  <li>{items.fourthinfo}</li>
                
             </ul>
          )  }
          </div>
        </div>
        <hr/>
        {`Copyright © Kabstore ${year}`}
    </footer>;
  };
  
  export default Footer;