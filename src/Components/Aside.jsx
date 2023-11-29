import "../Styles/Aside/aside.css"
import { interfaceElements } from "../variables";
const Aside = () => {
  let elemsts = interfaceElements.map((element) => {
    return (
      <li key={element.id} className="aside__list___element">
        <a href={element.link}>{element.name}</a>
      </li>
    );
  });

  return (
    <aside className="aside__container">
        <h2><span>Dev</span>challenges.io</h2>
      <div className="aside__list___container">
        <ul className="aside__list">{elemsts}</ul>
      </div>
    </aside>
  );
};

export default Aside;
