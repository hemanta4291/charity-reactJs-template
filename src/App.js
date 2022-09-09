import UseDarkMode from "./hooks/useDarkMode/UseDarkMode";
function App() {
  const [colorTheme,setTheme]= UseDarkMode()
  return (
    <div className="container mx-auto">
        <div onClick={()=>setTheme(colorTheme)}>
        { 
          colorTheme === "dark" ? 
          <div >Dark</div> :
          <div>light</div>

        }
        </div>
        <div className="md:columns-3 sm:columns-2 dark:bg-primary">
          <div className="colum">455</div>
          <div className="colum">455</div>
          <div className="colum">455</div>
        </div>
        
    </div>
  );
}

export default App;
