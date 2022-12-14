import PropTypes from 'prop-types';
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{data:items}]);
  const current =history[history.length-1];
  const renderItems = () => {
    return current.data.map((item, index) => {
        const isParent = !!item.children
        return <MenuItem key={index} data={item} onClick ={()=>{
          if(isParent){
            setHistory(prev => [...prev,item.children])
          }
        }} />
    }
    )
  }
  return (
    <Tippy
    delay={[0,1000]}
    offset={[12, 8]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
           {history.length>1 && <Header title={current.title} onBack={() =>{
            setHistory((prev) =>prev.slice(0, prev.length -1 ));
           }}
           />
          }
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() =>setHistory(prev => prev.slice(0,1))}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children : PropTypes.node.isRequired,  
  items : PropTypes.array
};

export default Menu;
