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
    <form className=' w-[100vh] text-center float-right h-[70vh]  ml-[20rem]'>
        <h1 className='text-4xl mt-24'>Contact Us</h1>
        <div className='flex space-x-32'>
            <div>
        <label>
          Name*
          </label><br/>
        <input type="text" className='border-2 outline-none ml-24 mt-4 p-4' value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
        </div>
        <div>
        <label>
          Email*
          </label><br/>
        <input type="email" className='border-2 outline-none ml-24 mt-4 p-4' value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/>
        </div>
        </div>
        <div className='float-left mt-12'>
        <label>
          Subject*
        </label><br/>
        <input type="subject" className='border-2 outline-none ml-24 mt-4 p-4' value={subject} required onChange={(e)=> {handleSubjectChange(e)}} /><br/>
        <div className='mt-16'>
        <label>
            Message
        </label><br/>
        <textarea type='message'className='border-2 outline-none ml-24 mt-4 p-4'  value={message} required onChange={(e)=>{handleMessageChange(e)}}/>
        </div>
        <div className=' mt-[12rem]'>
            <button className='bg-black text-white p-4 w-[15rem]'>Send Message</button>
        </div>
        </div>
      </form>
    </header>
    </div>
  );
}
 
export default Form;