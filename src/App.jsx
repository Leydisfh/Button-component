import "./index.css"
import './App.css'

import Aside from './Components/Aside';
import ButtonsElements from "./Components/Buttons";

function App() {
 

  return (
    <>
    <div className="container">
     <Aside />
     <main>
     <h2 className="title">Buttons</h2>
     <section className="btn_btns___constainer">
      <div className="btn_btns__defult__container">
     <ButtonsElements
        textCode="Button"
        btnTitile= "Default"
        newClase={"btn"}
      />
      </div>
     </section>
     </main>
    </div>
    </>
  )
}

export default App
