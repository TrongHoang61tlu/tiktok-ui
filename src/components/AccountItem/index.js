import PropTypes from 'prop-types';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from "../Image";

const cx = classNames.bind(styles);
function AcountItem({data}) {
  return (
    <Link to={`/@${data.nickname}`}>
    <div className={cx("wrapper")}>
     
      <Image
        className={cx("avatar")}
        src= {data.avatar}
        alt= {data.full_name}
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />}
        </p>
        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </div>
    </Link>
  );
}

AcountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AcountItem;
