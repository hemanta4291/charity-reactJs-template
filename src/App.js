import UseDarkMode from "./hooks/useDarkMode/UseDarkMode";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./layout/main/Main";
function App() {
  const [colorTheme,setTheme]= UseDarkMode()
  return (
      <div className="App">
          <BrowserRouter>
            <Main/>
          </BrowserRouter>
      </div>
  );
}

export default App;
