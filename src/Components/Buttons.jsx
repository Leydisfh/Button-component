import "../Styles/btnBase.css";
const ButtonsElements = ({textCode,textClass, btnTitile, newClass}) => {
  
const claseBase = `btnBase  ${newClass}`

  
  return (
    <section className="btn_container">
      <aside className="btn__description__code">
        <pre>
          <code className={textClass}>{textCode}</code>
        </pre>
      </aside>
      <button className= {claseBase} >
        {btnTitile}
      </button>
    </section>
  );
};

export default ButtonsElements;
