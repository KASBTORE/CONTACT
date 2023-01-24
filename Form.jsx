import { useState, useEffect } from "react";

export default function Form() {
 
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading,setLoading] = useState("")
  const [subject, setSubject] = useState(false)
  const [random, setRandom] = useState(Math.floor(Math.random() *1000000000))
  console.log(name)
  const handleFormSubmit = async e => {
    e?.preventDefault()
    setName('')
    setEmail('')
    setMessage('')
    setSubject('')
    setRandom(Math.floor(Math.random() * 1000000000))
    console.log(random)
    try {
      const api = await fetch('https://contactpage-api.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // mode: 'no-cors',
        body: JSON.stringify({
          name: (name),
          email: (email),
          subject:(subject),
          message: (message),
          id: (random)
        })
      })
      const data = await api.json()
      // console.log(data);}
      if (data) {
        setLoading(false)
      }
    }
    catch (err) {
      console.log(err)
    }
  }
   
  return (
    <div  id='contact' className="App">
    <header className="App-header">
    <form  onSubmit={(e) => e.preventDefault()}
            method="POST" className=' lg:w-[100vh] lg:text-center lg:float-right ml-4 mt-36 md:mt-[3rem] lg:h-[70vh] h-[80vh] md: float-left lg:ml-[20rem] md:ml-[3rem]'>
        <h1 className='text-4xl mt-24 md:mt-[3rem] md:ml-[15rem] md:mb-[3rem] mb-[3rem] lg:mb-[3rem] ml-[5rem] lg:ml-[1rem]'>Contact Us</h1>
        <div className='lg:flex'>
            <div>
        <label className="lg:mr-[12rem]">
          Name*
          </label><br/>
        <input type="text" className=' border border-gray-300 lg:ml-24  mt-4 lg:p-4 p-4 pl-[5rem] bg-gray-50 lg:pl-[6rem] md:pl-[14rem]' onChange={(e) => { setName(e.target.value) }}
                  value={name} /><br/>
        </div>
        <div className=" w-[21rem] md:w-[50rem] lg:w-[20rem]">
        <label  className=" lg:mr-[12rem]">
          Email*
          </label><br/>
        <input type="email" className=' border border-gray-300 lg:ml-24 mt-4 lg:p-4 p-4 pl-[5rem] bg-gray-50 lg:pl-[6rem] md:pl-[14rem] ' onChange={(e) => { setEmail(e.target.value) }
                  } value={email} /><br/>
        </div>
        </div>
        <div className='float-left lg:mr-[10rem] lg:mt-12 '>
          <div className='lg:ml-[6rem] lg:w-[50rem]  w-[21rem] md:w-[30rem]'>
        <label className="float-left mb-[1rem]">
          Subject*
        </label><br/>
        <input type="subject" className='block lg:w-full w-full md:w-full p-4 text-gray-900 border border-gray-300  bg-gray-50 sm:text-md' onChange={(e) => { setSubject(e.target.value) }}
                  value={subject} /><br/>
                  </div>
        <div className='lg:mt-[2rem] lg:ml-[6rem] w-[21rem] md:w-[30rem] lg:w-[50rem]'>
        <label  className="float-left mb-[1rem]">
            Message
        </label><br/>
        <textarea type='message' className='block lg:w-full  w-full md:w-full p-4 text-gray-900 border border-gray-300 bg-gray-50 sm:text-md'  onChange={(e) => { setMessage(e.target.value) }} value={message}/>
        </div>
        <div className=' lg:mt-[12rem] mt-[5rem]'>
            <button className='bg-black text-white p-4 w-[15rem] md:ml-[4rem]' onClick={() => {
                    handleFormSubmit()
                     setLoading(true)
                  }}
                  >Send Message</button>
        </div>
        </div>
      </form>
    </header>
    </div>
  );
}
 
