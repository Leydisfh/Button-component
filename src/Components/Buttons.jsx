import "../Styles/btnBase.css";
const ButtonsElements = ({id, textCode,textClass,icon ,btnTitle, newClass}) => {
  
const claseBase = `btnBase  ${newClass}`

  
  return (
    <section className="btn_container" id={id}>
      <aside className="btn__description__code">
        <pre>
          <code className={textClass}>{textCode}</code>
        </pre>
      </aside>
      <button className= {claseBase} >
        <img src={icon} />    
        {btnTitle}
      </button>
    </section>
  );
};

export default ButtonsElements;
