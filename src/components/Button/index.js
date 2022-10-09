import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from ".//Button.module.scss";

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  primary,
  outline = false,
  text = false,
  rounded = false,
  icon,
  menuitem =false,
  small = false,
  large = false,
  children,
  onClick,
}) {
  let Comp = "button";
  const props = {
    onClick,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes = cx("wrapper", {
    primary,
    outline,
    text,
    rounded,
    icon,
    menuitem,
    small,
    large,
    to
  });
  return (
    <Comp className={classes} {...props}>
      {icon && <span className={cx("icon")}>{icon}</span>}
      <span className={cx("title")}>{children}</span>
    </Comp>
  );
}

Button.propTypes  = {
  to : PropTypes.string,
  href : PropTypes.string,
  primary : PropTypes.bool,
  outline : PropTypes.bool,
  text : PropTypes.bool,
  rounded : PropTypes.bool,
  icon : PropTypes.string,
  menuitem : PropTypes.string,
  small : PropTypes.bool,
  large : PropTypes.bool,
  children : PropTypes.node.isRequired,
  onClick : PropTypes.func,
}

export default Button;
