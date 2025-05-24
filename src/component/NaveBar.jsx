import React from 'react'

import { Link } from 'react-router-dom'

function NaveBar(props) {
  return (
   <div className={`max-w-[1380px] m-auto flex justify-around p-[20px] mb-[10px] shadow-lg items-center font-bold ${props.mode}  ${props.txtmode}`}>
    <Link to='/'>Home</Link>
   

    <div>

      <button onClick={props.buleBtn} className='lg:h-[30px] lg:w-[30px] md:h-[20px] md:w-[20px] w-[20px] h-[20px]  bg-blue-950 rounded-[25px] ml-[10px] '></button>
      <button onClick={props.redBtn} className='lg:h-[40px] lg:w-[40px] md:h-[30px]md:w-[30px] h-[30px] w-[30px] bg-red-800 rounded-[25px] ml-[10px] '></button>
      <button onClick={props.greenBtn} className='lg:h-[50px] lg:w-[50px] md:h-[40px] md:w-[40px] h-[40px] w-[40px] bg-green-900 rounded-[25px] ml-[10px] '></button>
    </div>
    <button onClick={props.handle} className='lg:p-[10px] md:p-[9px] p-[8px]  border-2 rounded-2xl cursor-pointer hover:scale-125 duration-1000'>{props.btnElm}</button>
   </div>
    
  )
  
}


export default NaveBar