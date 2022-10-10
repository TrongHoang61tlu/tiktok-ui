import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <img className={cx("avatar")} src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1649763716022277~c5_100x100.jpeg?x-expires=1665554400&x-signature=%2BexJTXn5VKXHvgcKmCthHEvWCKs%3D" alt="" />
        <Button primary>Follow</Button>
      </header>
      <div className={cx("body")}>
        <h4 className={cx("nickname")}>
          <strong>Hoang</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <p className={cx("name")}>Hoanh</p>
        <p className={cx('analytics')}>
            <strong className={cx('value')}>8.2M</strong>
            <span className={cx('label')}>Like</span>
            <strong className={cx('value')}>8.2M</strong>
            <span className={cx('label')}>Like</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
