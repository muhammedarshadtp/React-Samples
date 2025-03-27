// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [click, setClick] = useState(0)
//   const clickHandle = () => {
//     // setClick((prev) => !prev)
//     if(click===0){
//       setClick(1)
//     }else{
//       setClick(0)
       
//     }
//   }

//   return (
//     <>
//       <div>
//         <div className="App">
//           <button style={{backgroundColor:click ==0 ? 'blue':'black'}}  onClick={clickHandle} >click</button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App



// import { useState } from 'react'
// import './App.css'

// function App() {
//   const colors = ['green', 'blue', 'red', 'black'];
//   const [click, setClick] = useState(0);

//   const clickHandle = () => {
//     setClick((prev) => (prev + 1) % colors.length);
    
//   }

//   return (
//     <>
//       <div>
//         <div className="App">
//           <button style={{backgroundColor: colors[click]}} onClick={clickHandle}>click</button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'black' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ThemedComponent() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', 
            color: theme === 'light' ? '#000' : '#fff', padding: '20px', textAlign: 'center' }}>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}
function App() {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
}

export default App;
