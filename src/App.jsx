import "./index.css";
import './App.css';
import "./Styles/btnStyles/btnDefault.css";
import "./Styles/btnStyles/btnOutline.css";
import "./Styles/btnStyles/btnText.css";
import "./Styles/btnStyles/disableShadow.css"

import Aside from './Components/Aside';
import { buttons } from "./variables";
import ButtonsElements from "./Components/Buttons";


function App() {

  return (
    <div className="container">
     <Aside />
     <main>
     <h2 className="title">Buttons</h2>
     <section className="btn_btns___constainer">   
     {buttons.map((category, index) => (
            <div key={index} className="btn_container__buttons">
              {category.buttons.map((btn, btnIndex) => (
                <ButtonsElements
                  key={btnIndex}
                  btnTitle={btn.btnTitle} 
                  newClass={btn.newClass}
                  textCode={btn.textCode}
                  textClass={btn.textClass}
                />
              ))}
            </div>
          ))}
     </section>
     </main>
    </div>
  )
}

export default App
