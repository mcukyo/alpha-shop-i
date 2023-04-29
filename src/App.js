// import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './icons/logo-bright.png';
import imgProduct1 from './images/product-1.jpg';
import imgProduct2 from './images/product-2.jpg';
import StepProgress from './components/StepProgress/index'
import Step from './components/Step/index'
import ProgressControl from './components/ProgressControl/index'
// import { ReactComponent as Logo } from './icons/logo-bright.png'
import './App.css';
import styles from './App.module.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }





function App() {
  return(
    <>
      

      {/* <!-- main --> */}
      <main className="site-main">
        <div className={styles.mainContainer}>
          {/* <!-- register --> */}
          <section className={styles.registerContainer} data-phase="1" data-total-price="0">
            {/* <!-- register-title --> */}
            <StepProgress/>

            {/* <!-- register-form --> */}
            <Step/>

          </section>

          {/* <!-- cart --> */}
          <section className="styles.cartContainer">
          </section>

          {/* <!-- progress-control --> */}
          <section className='styles.progressControl'>
           <ProgressControl/> 
          </section>
          
        </div>
      </main>

      
    </>
  );
}


export default App