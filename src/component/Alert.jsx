import React from 'react'

function Alert(props) {

  return ( 
<div className=' h-[40px] max-w-[1380px] m-auto'>
  {  props.alertText && <div className=' bg-green-400 ] '>
    <strong className='ml-[20px] py[10px]'>{props.alertText.ty}</strong> : {props.alertText.msg}
    </div>}
    </div>
  
  )
}

export default Alert