import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper } from "../Popper";
import AccountPreview from "./AccountPreview";
const cx = classNames.bind(styles);

function AccountItem() {

    const renderPriview = (props) =>{
        return(
            <div className={cx('preview')} tabIndex = "-1" {...props}>
                <Wrapper>
                    <div>
                        <AccountPreview />
                    </div>
                </Wrapper>

            </div>
        )
    }
  return (
   <div>
       <Tippy 

            interactive
            delay={[800, 0]}
            offset={[-20,]}
            placement="bottom"
            render={renderPriview}
       >
            <div className={cx("account-item")}>
              <img
                className={cx("avatar")}
                src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1649763716022277~c5_100x100.jpeg?x-expires=1665554400&x-signature=%2BexJTXn5VKXHvgcKmCthHEvWCKs%3D"
                alt=""
              ></img>
              <div className={cx("item-info")}>
                <h4 className={cx("nickname")}>
                  <strong>Hoang</strong>
                  <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx("name")}>Hoanh</p>
              </div>
            </div>
       </Tippy>
   </div>
  );
}

AccountItem.propTypes = {
  styles: PropTypes.string,
};

export default AccountItem;
