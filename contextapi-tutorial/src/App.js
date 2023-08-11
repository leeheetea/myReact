import { createContext, useContext } from "react";
import "./App.css";

const themeDefault = { border: `10px solid green` };
const themeContext = createContext(themeDefault);

// 커스텀 훅 생성
const useTheme = () => {
  return useContext(themeContext);
};

const Sub1 = () => {
  const theme = useTheme();
  return (
    <themeContext.Provider value={{ border: "10px solid red" }}>
      <div style={theme}>
        <h1>Sub1</h1>
        <Sub2 />
      </div>
    </themeContext.Provider>
  );
};

const Sub2 = () => {
  const theme = useTheme();
  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3 />
    </div>
  );
};

const Sub3 = () => {
  const theme = useTheme();
  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
};

function App() {
  const theme = useTheme();
  return (
    <>
      <div className="root" style={theme}>
        <h1>Hello World!</h1>
        <Sub1 />
      </div>
    </>
  );
}

export default App;

//HOC로 횡단하는 방법

// import { createContext, useContext } from "react";
// import "./App.css";

// const themeDefault = { border: `10px solid green` };
// const themeContext = createContext(themeDefault);

// const withTheme = (Component) => {
//   return (props) => {
//     const theme = useContext(themeContext);
//     return <Component {...props} theme={theme} />;
//   };
// };

// const Sub1 = withTheme(({ theme }) => {
//   return (
//     <themeContext.Provider value={{ border: "10px solid red" }}>
//       <div style={theme}>
//         <h1>Sub1</h1>
//         <Sub2 />
//       </div>
//     </themeContext.Provider>
//   );
// });

// const Sub2 = withTheme(({ theme }) => {
//   return (
//     <div style={theme}>
//       <h1>Sub2</h1>
//       <Sub3 />
//     </div>
//   );
// });

// const Sub3 = withTheme(({ theme }) => {
//   return (
//     <div style={theme}>
//       <h1>Sub3</h1>
//     </div>
//   );
// });

// function App() {
//   return (
//     <>
//       <div className="root">
//         <h1>Hello World!</h1>
//         <Sub1 />
//       </div>
//     </>
//   );
// }

// export default App;
