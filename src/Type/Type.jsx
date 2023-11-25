
import "./Type.css";
import React, { useState, useEffect } from 'react';

const Tabs = ({ children, tabsList }) => {
  const [active, setActive] = useState(0);
  const [style, setStyle] = useState({});
  const [tabs, setTabs] = useState(tabsList);
  const [responsiveTabs, setResponsiveTabs] = useState([]);
  const [dropdownStatus, setDropdownStatus] = useState(false);

  const tabsRef = React.useRef(null);

  const spliceTabs = () => {
    let totalWidth = 0;
    let barWidth = tabsRef.current.clientWidth - 44;

    const el = document.getElementsByClassName('tab__item');

    for (let i = 0; i < el.length; i++) {
      const tabWidth = el[i].clientWidth;

      if (i === el.length - 1) {
        barWidth += 44;
      }

      if (totalWidth + tabWidth > barWidth) {
        const newTabs = tabs.slice(i, tabs.length);
        setResponsiveTabs(newTabs);
        setTabs(tabs.slice(0, i));
        break;
      }

      totalWidth += tabWidth;
    }
    setStyle();
  };

  const update = () => {
    setTabs((prevTabs) => [...prevTabs, ...responsiveTabs]);
    setResponsiveTabs([]);
    spliceTabs();
  };

  const setStyle = () => {
    let width = null;
    let left = 0;

    if (active < tabs.length) {
      const el = document.getElementsByClassName('tab__item');

      for (let i = 0; i < el.length; i++) {
        let tabWidth = el[i].clientWidth;
        if (i === active) {
          width = tabWidth;
          break;
        } else {
          left += tabWidth;
        }
      }
    }

    setStyle({ width, left });
  };

  const changeTab = (index) => {
    setActive(index);
    setDropdownStatus(false);
    setStyle();
  };

  const toggleDropdown = () => {
    setDropdownStatus((prevStatus) => !prevStatus);
  };

  useEffect(() => {
    spliceTabs();
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('resize', update);
    };
  }, [tabs]);

  return (
    <>
      <ul className="tabs" ref={tabsRef}>
        {tabs.map((item, index) => (
          <li
            key={index}
            onClick={() => changeTab(index)}
            className={`tab__item ${active === index ? 'active' : ''}`}
          >
            {item}
          </li>
        ))}
        <span style={style} className="indicator"></span>
        {responsiveTabs.length > 0 && (
          <Dropdown active={dropdownStatus} toggleDropdown={toggleDropdown}>
            {responsiveTabs.map((tab, index) => {
              const tabIndex = tabs.length + index;
              return (
                <li
                  key={index}
                  className={`tab__item ${tabIndex === active ? 'active' : ''}`}
                  onClick={() => changeTab(tabIndex)}
                >
                  {tab}
                </li>
              );
            })}
          </Dropdown>
        )}
      </ul>
      {children.map((child, index) => (
        <div key={index} className={`tab__content ${index === active ? 'active' : ''}`}>
          {child}
        </div>
      ))}
    </>
  );
};

const Dropdown = ({ children, active, toggleDropdown }) => (
  <div className="dropdown__wrapper">
    <a className="dropdown__toggle" href="#" onClick={toggleDropdown} data-toggle="dropdown">
      ...
    </a>
    <ul className={`dropdown ${active ? 'active' : ''}`}>{children}</ul>
  </div>
);

const App = () => {
  const tabsList = ['Dados da compra', 'Estado civil', 'cavalo de troia', 'todo mundo odeia o cris', 'teste', 'tchacabum'];

  return (
    <div>
      <Tabs tabsList={tabsList}>
        <div>Tab 1</div>
        <div>Tab 2</div>
        <div>Tab 3</div>
        <div>Tab 4</div>
        <div>Tab 5</div>
        <div>Tab 6</div>
      </Tabs>
    </div>
  );
};

export default App;