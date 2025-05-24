import React from 'react'
import { useState } from 'react'

function Counter() {
   let [count,countfun] = React.useState(0)

   const [numbers, setNumbers] = useState([])
   const [number,setNumber]= useState ('')
   const [total, setTotal] = useState(0)

  const handleOnchange = (e)=>{
    setNumber(e.target.value)
  }
  const handleSubmit = (e)=>{
   e.preventDefault();
   if (number.trim() === '' || isNaN(number)) return;
    setNumbers([...numbers ,parseFloat(number)] );
    console.log(numbers)
    setNumber('')

  }

  const handleTotal = ()=>{
  const sum =  numbers.reduce((acc,num)=> acc+num,0)
  setTotal(sum)
  }
  const handleCler = ()=>{
    numbers.splice(0)
    setTotal(0)
    console.log(numbers)
  }



  return (
    <>
    <div className=' max-w-[1380px] w-auto h-[100vh] grid grid-rows-2  justify-center'>
    <div className="h-[300px] w-[300px] shadow-lg  grid ml-[30px] bg-gray-500 items-center rounded-2xl">
    <p className="text-center text-4xl">Counter</p>
    <p className="text-center text-3xl">{count}</p>
    <button className="text-center  h-[50px] w-[180px] ml-[55px] bg-amber-400 rounded-[20px] hover:scale-125 duration-1000" onClick={()=>countfun(count+1)}>Count+</button>
 </div>

 <div className='mt-[30px]  h-[300px] w-[300px] ml-[30px] drop-shadow-lg bg-gray-500 rounded-2xl grid grid-rows-3 items-center'> 
  <form className='mt-[25px] mb-[0px]  text-center flex justify-between ' onSubmit={handleSubmit} >
    <input className='border-1 ml-[10px] px-[10px] rounded-2xl' value={number} onChange={handleOnchange} type='number' placeholder='Enter Your Number'/>
    <button className='mr-[10px] p-[5px] px-[10px] bg-amber-400 rounded-[50%_0%] hover:scale-125 duration-1000' type='submit'>Submit</button>
  </form>

  <div className='flex  items-center justify-around mt[0px]'>
  <button onClick={handleTotal} className=' px-[25px] py-[5px]  bg-amber-300 rounded-[0%_20%] hover:scale-125 duration-1000'>Total</button>
  <button onClick={handleCler} className=' px-[25px] py-[5px]  bg-amber-300 rounded-[0%_20%] hover:scale-125 duration-1000'>Clear</button>
  </div>

  <div className='mb[5]'> <p className='mt-[30px] text-center text-2xl'>Total Amount: {total} </p></div>
    


 </div>
 </div>
 </>
  )
}

export default Counter