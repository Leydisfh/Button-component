import "../Styles/btnBase.css";
const ButtonsElements = ({textCode, btnTitile, newClass}) => {
  
const claseBase = `btnBase  ${newClass}`

  
  return (
    <section className="btn_container">
      <aside className="btn__description__code">
        <pre>
          <code>&lt;p&gt;{textCode}&lt;/p&gt;</code>
        </pre>
      </aside>
      <button className= {claseBase} >
        {btnTitile}
      </button>
    </section>
  );
};

export default ButtonsElements;
