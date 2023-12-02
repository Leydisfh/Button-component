import "./index.css"
import './App.css'
import "./Styles/btnsDefault/btnDefault.css"

import Aside from './Components/Aside';
import ButtonsElements from "./Components/Buttons";

function App() {
 

  return (
    <div className="container">
     <Aside />
     <main>
     <h2 className="title">Buttons</h2>
     <section className="btn_btns___constainer">
      
      <div className="btn_btns__defult__container">
     <ButtonsElements
        textCode="&lt;p&gt;Button&lt;/p&gt;"
        btnTitile= "Default"
        newClass={"btn__default-gray"}
      />
       <ButtonsElements
        textCode="&:hover, &:focus"
        textClass= "default_code-style"
        btnTitile= "Default"
        newClass={"btn__default-dark"}
      />
      </div>
     </section>
     </main>
    </div>
  )
}

export default App
