import React, { useState } from 'react'

const Form = () => {

const [ name , setName] =useState('')
const [email, setEmail]= useState('')
const [password, setPassword]= useState('')
const [users , setUsers] =useState([])



const handleSubmit = (e) =>{
    e.preventDefault();
 console.log(email,name,password)

setUsers(... users ,[{name , email, password}])

}



  return (
    <div className="container max-w-7xl mx-auto">


       <h2 className="text-center mt-6"> This is a form</h2>

<div>
    <form className='text-center mt-6 py-3' onSubmit={(e)=>{
        handleSubmit(e)
    }}>
        <label htmlFor="name"> Name :</label>
        <input className='bg-gray-300 px-3 py-2 rounded-2xl mb-2' type="text" value={name} 
        onChange={(e)=>{
       setName(e.target.value)
        }} />
        <br />

        <label htmlFor="email"> Email :</label>
        <input className='bg-gray-300 px-3 py-2 rounded-2xl mb-2' type="email" value={email}
        onChange={(e)=>{
         setEmail(e.target.value)
        }}
        />
        <br />
        <label htmlFor="name"> password :</label>
        <input className='bg-gray-300 px-3 py-2 rounded-2xl' type="text" value={password}
         onChange={(e)=>{
         setPassword(e.target.value)
        }}
        
        />
 <br />
        <input type="submit" className='px-3 py-2 bg-cyan-300 mt-4 rounded-3xl' value="submit" />
    </form>
</div>

<div className='bg-amber-300 h-200px w-200px'>
{
    users.map((user)=>{
 return <h1>{user?.name}</h1>
    })
}
</div>


    </div>
  )
}

export default Form