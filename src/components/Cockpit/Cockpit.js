import React,{useEffect , useRef}  from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/Auth-Context'

const Cockpit = (props) => {
      const ToggleBtnRef = useRef(null);
     useEffect(() =>{
       
         console.log('[cockpit.js] Useeffect is rendering' )
       const Timer = setTimeout(() => {
       ToggleBtnRef.current.click();
       } , 1500)
     
       return () => {
           clearTimeout(Timer)
           console.log('[cockpit.js] Useeffect is cleaned')
       }
     },[])
     useEffect(() => {
         console.log('[cockpit.js] 2ndUseeffect')
         return () => {
             console.log('[cockpit.js] 2ndUseeffect cleaned')
         }
     })

    let assignedClasses = [];
    if(props.personsLength <2){
      assignedClasses.push(classes.red)
    }
    if(props.personsLength<1){
      assignedClasses.push(classes.bold)
    }
    return(
      <div className = {classes.App}>
          <h1>{props.title}</h1>
        <p className = {assignedClasses.join(' ')}>React App</p>
        <button ref = {ToggleBtnRef} className = {classes.Button}
         onClick = {props.Handler}>Toggle Person</button>
         <AuthContext.Consumer>
        {(context) => <button onClick = {context.loginHandler}>Login</button>}
        </AuthContext.Consumer>
         </div>
    )
}
    

export default React.memo(Cockpit);