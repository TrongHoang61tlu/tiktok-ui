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
  });
  return (
    <Comp className={classes} {...props}>
      {icon && <span className={cx("icon")}>{icon}</span>}
      <span className={cx("title")}>{children}</span>
    </Comp>
  );
}

export default Button;
