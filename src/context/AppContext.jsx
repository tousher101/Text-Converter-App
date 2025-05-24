import {  createContext, useContext, useState } from "react";

 export const AppContext = createContext();
export const AppProvider = ({children})=>{
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


    
      
 return (
    <AppContext.Provider value={{alert, setAlert, displayAlert, bgMode, setbgMode, btnText, setBtnText, secBg, setSecBg,textmode , setTextmode,
        
     }}>{children}</AppContext.Provider>
)
}



export const useAppContext = ()=>useContext(AppContext)