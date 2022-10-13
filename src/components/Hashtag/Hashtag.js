import classNames from "classnames/bind";
import styles from './Hashtag.module.scss'
import HashtagItem from "./HashtagItem";

const cx = classNames.bind(styles);
function Hashtag({label}) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <HashtagItem/>
            <HashtagItem/>
            <HashtagItem/>
            <HashtagItem/>
            <HashtagItem/>
            <HashtagItem/>
            <HashtagItem/>
            <HashtagItem/>
            <HashtagItem/>
        </div>
        
    );
}

export default Hashtag;