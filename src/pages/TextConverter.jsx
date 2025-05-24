import { useState } from "react";
import React from 'react'



function TextConverter(props) {
let [text,setText]=useState('');
 const onChangeHandle = (e)=>{setText(e.target.value)};


 const onClickHandle = ()=>{
   const newText = text.toUpperCase();
   setText(newText)
  props.displayAlert('Converted UpperCase', 'Sucess')
 

   };

   const copyTextHandle = ()=>{
      //const text = document.querySelector('.js-copy')
      //const newText = text.value;
      //text.select();
      //document.getSelection().removeAllRanges(); 
      navigator.clipboard.writeText(text)
      props.displayAlert('Copied to Clipboard', 'Sucess')
     

     
      };

    
   const RemoveSpaces = ()=>{
    
    const newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.displayAlert('Removed All Spaces', 'Sucess')

    };

    const tileCase = ()=>{
      const title = text.toLowerCase().split(' ').map(word=> word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
      setText(title)
   
    }
 
   

  
      
  return (
   <div className={`min-h-screen w-full overflow-x-hidden bg-cover bg-center ${props.secBg} ${props.textmode} grid grid-cols-1 justify-center py-[20px]`}>
        <div className="mb-[0px]"><p className="text-center lg:text-4xl sm:text-3xl text-3xl font-bold m-0 p-0 ">{props.title}</p></div>

    <div className="grid mr-[20px] ml-[20px] mt-[0px]">
       <textarea value={text} onChange={onChangeHandle}  className=' border-2 text-xl mb-[10px]  js-copy'/>
    </div>

    <div className="  text-black lg:flex lg:justify-center   grid justify-center grid-cols-1 mt-[15px] gap-3 items-center ">
      <div className="md:flex md:justify-center flex justify-center">    
    <button disabled={text.length === 0} onClick={onClickHandle}  className='h-[40px] w-[180px] border-2 bg-amber-500 rounded-3xl cursor-pointer hover:scale-125 duration-1000 mr-[5px]' >Convert Upper Case</button>
    <button disabled={text.length === 0} onClick={()=>{setText(text.toLowerCase()); props.displayAlert('Coverted to LowerCase', 'Sucess')
        }} className='h-[40px] w-[180px] border-2 bg-amber-500 rounded-3xl cursor-pointer hover:scale-125 duration-1000 mr-[5px]' >Lower Case</button>
     </div>

     <div className="md:flex md:justify-center flex justify-center">
      <button disabled={text.length === 0} onClick={()=>{setText(text.charAt(0).toUpperCase()+text.slice(1)); props.displayAlert('Coverted Capitalized', 'Sucess')
        }} className='h-[40px] w-[180px] border-2 bg-amber-500 rounded-3xl cursor-pointer hover:scale-125 duration-1000 mr-[5px]' >Convert Capitalized</button>
      <button disabled={text.length === 0} onClick={RemoveSpaces}  className='h-[40px] w-[180px] border-2 bg-amber-500 rounded-3xl cursor-pointer hover:scale-125 duration-1000 mr-[5px]' >Remove Space</button>
     </div>

    <div className="md:flex md:justify-center flex justify-center">
    <button disabled={text.length === 0} onClick={copyTextHandle} className='h-[40px] w-[180px] border-2 bg-amber-500 rounded-3xl cursor-pointer hover:scale-125 duration-1000 mr-[5px]'  >Copy Text</button>
    <button disabled={text.length === 0} onClick={tileCase}  className='h-[40px] w-[180px] border-2 bg-amber-500 rounded-3xl cursor-pointer hover:scale-125 duration-1000 mr-[5px]' >Title Case</button>
    </div>

    <div className="md:flex md:justify-center flex justify-center">
    <button disabled={text.length === 0} onClick={()=>{setText('')}} className='h-[40px] w-[180px] border-2 bg-amber-500 rounded-3xl cursor-pointer hover:scale-125 duration-1000 mr-[5px]'>Clear</button>
    </div>
    
    </div>

    <div className="mt-[10px] grid text-center justify-center ">
     <p className="lg:text-4xl sm:text-3xl text-3xl font-bold ">{props.Summary}</p> 
      <p className="text-2xl">Total Words: {text.trim() === ""?0:text.trim().split(/\s+/).length }</p>
      <p className="text-2xl">Total Chartrcter: {text.length}</p>
      <div className=" lg:w-[700px] md:w-[500px] w-[400px] ">
        <p className="text-2xl break-words overflow-auto ">Preview: {text.length>0?text:'Nothing To Preview.'}</p>
        </div>
    </div>
   </div>
  )
}

export default TextConverter


