import { useState } from "react";
import "./App.css";
import ColorBox from "./components/ColorBox.jsx";
import SelectColors from "./components/SelectColors";
import Page from "./components/Page.jsx";
import { ColorProvider } from "./contexts/color";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    // <ColorProvider>
    //   <div>
    //     <SelectColors />
    //     <ColorBox />
    //   </div>
    // </ColorProvider>
    <ThemeProvider>
      <Page></Page>
    </ThemeProvider>
  );
}

export default App;
