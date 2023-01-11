import React, {useState} from 'react'
 
function Form() {
    
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [subject , setSubject] = useState('');
    const[message,setMessage] = useState('');
    const handleChange =(e)=>{
      setName(e.target.value);
    }
    

    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
    const handleSubjectChange =(e)=>{
      setSubject(e.target.value);
    }
   const handleMessageChange =(e) =>{
    setMessage(e.target.value);
   }
    
   
  return (
    <div className="App">
    <header className="App-header">
    <form className=' lg:w-[100vh] lg:text-center lg:float-right ml-4 mt-36 lg:h-[70vh] float-left lg:ml-[20rem]'>
        <h1 className='text-4xl mt-24'>Contact Us</h1>
        <div className='lg:flex lg:space-x-32 '>
            <div>
        <label>
          Name*
          </label><br/>
        <input type="text" className='border-2 outline-none lg:ml-24  mt-4 lg:p-4 p-4 pl-[5rem]' value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
        </div>
        <div>
        <label>
          Email*
          </label><br/>
        <input type="email" className='border-2 outline-none lg:ml-24 mt-4 lg:p-4 p-4 pl-[5rem]' value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/>
        </div>
        </div>
        <div className='float-left lg:mt-12'>
        <label>
          Subject*
        </label><br/>
        <input type="subject" className='border-2 outline-none lg:ml-24 mt-4 lg:p-4 p-4 pl-[5rem]' value={subject} required onChange={(e)=> {handleSubjectChange(e)}} /><br/>
        <div className='lg:mt-16'>
        <label>
            Message
        </label><br/>
        <textarea type='message'className='border-2 outline-none lg:ml-24 mt-4 lg:p-4 p-4 pl-[5rem]'  value={message} required onChange={(e)=>{handleMessageChange(e)}}/>
        </div>
        <div className=' lg:mt-[12rem] mt-[5rem]'>
            <button className='bg-black text-white p-4 w-[15rem]'>Send Message</button>
        </div>
        </div>
      </form>
    </header>
    </div>
  );
}
 
export default Form;