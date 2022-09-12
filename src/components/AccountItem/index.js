import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);
function AcountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0f85234bfaa37b6d626db139b6bec70a~c5_300x300.webp?x-expires=1663153200&x-signature=NC0NjpH9x2yB4iBvpFPlb%2BRdV0U%3D"
        alt=""
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AcountItem;
