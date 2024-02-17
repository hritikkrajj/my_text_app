import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [Mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

   const toggleMode =(cls)=>{
    removeBodyClasses();
     console.log(cls)
     document.body.classList.add('bg-'+cls)
     if(Mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor ='#31366f';
       showAlert("Dark mode has been enabled", "success")
       document.title = 'Textutils - Dark Mode';
     }
     else{
       setMode('light');
       document.body.style.backgroundColor ='white';
       showAlert("Light mode has been enabled", "success")
       document.title = 'Textutils - Light Mode';
     }
   }
  return (
    <>
{/* <Navbar title="Textutils2" AboutText="Aboututils"/> */}
{/* <Navbar/> */}
<Navbar title="Textutils" mode={Mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={Mode}/>
{/* <About/> */}
</div>
    </>
  );
}

export default App;