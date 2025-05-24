import React from 'react'
import NaveBar from './component/NaveBar'
import { useState, createContext } from 'react'
import Alert from './component/Alert'
import './output.css'
import TextConverter from './pages/TextConverter'
import Counter from './pages/Counter'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


export const App = () =>  {
const [alert, setAlert]=useState(null);
const displayAlert = (massage, type)=>{
  setAlert({
    msg: massage,
    ty: type
  });

setTimeout(()=>{
  setAlert(null)
}, 2000)
}

const [bgMode, setbgMode]=useState('bg-white')
const [textmode, setTextmode] = useState('text-black')
const [btnText, setBtnText]= useState('Dark Mode')
const [secBg, setSecBg]=useState('bg-amber-900')

const handleclick =()=>{
if(bgMode==='bg-white'){setbgMode('bg-gray-900'); document.body.style.backgroundColor = 'Black'; 
  setBtnText('Light Mode'); displayAlert('Dark Mode Enable', 'Sucess')}
else{setbgMode('bg-white');document.body.style.backgroundColor ='white'; displayAlert('Light Mode Enable', 'Sucess')}
if(textmode==='text-black'){setTextmode('text-white')}else{setTextmode('text-black'); setBtnText('Dark Mode')}
if(secBg==='bg-amber-900'){setSecBg('bg-black')} else{setSecBg('bg-amber-900')}
}
const handleClickBlue = ()=>{
  if(bgMode==='bg-white'){setbgMode('bg-black'); document.body.style.backgroundColor = 'Black'; displayAlert('Blue Mode Enable', 'Sucess')}
   else {setbgMode('bg-white'); displayAlert('Light Mode Enable', 'Sucess'); document.body.style.backgroundColor = 'White'}
  if(textmode === 'text-black'){setTextmode('text-white')}else{setTextmode('text-black')}
  if(secBg==='bg-amber-900'){setSecBg('bg-blue-950')} else{setSecBg('bg-amber-900'); document.body.style.backgroundColor ='white'}
}
const handleClickRed= ()=>{
  if(bgMode==='bg-white'){setbgMode('bg-red-500'); document.body.style.backgroundColor = 'Black';  displayAlert('Red Mode Enable', 'Sucess')} 
  else {setbgMode('bg-white'); displayAlert('Light Mode Enable', 'Sucess')}
  if(textmode === 'text-black'){setTextmode('text-white')}else{setTextmode('text-black')}
  if(secBg==='bg-amber-900'){setSecBg('bg-red-900')} else{setSecBg('bg-amber-900'); document.body.style.backgroundColor ='white'}
}
const handleClickGreen= ()=>{
  if(bgMode==='bg-white'){setbgMode('bg-green-500'); document.body.style.backgroundColor = 'Black'; displayAlert('Green Mode Enable', 'Sucess')} 
  else {setbgMode('bg-white'); displayAlert('Light Mode Enable', 'Sucess')}
  if(textmode === 'text-black'){setTextmode('text-white')}else{setTextmode('text-black')}
  if(secBg==='bg-amber-900'){setSecBg('bg-green-900')} else{setSecBg('bg-amber-900'); document.body.style.backgroundColor ='white'}
}

  return (
    <BrowserRouter>
  
<NaveBar mode = {bgMode} txtmode={textmode} handle = {handleclick} btnElm = {btnText} buleBtn ={handleClickBlue} redBtn = {handleClickRed}
greenBtn = {handleClickGreen}/>
<Alert alertText = {alert}/>
<Routes>
    <Route path='/' element={<TextConverter title = 'Text Coverter App' Summary = 'Text Summary' secBg={secBg}
    textmode={textmode} displayAlert={displayAlert}/>}/>

</Routes>

    
    </BrowserRouter>
  )
}

export default App