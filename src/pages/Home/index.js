import React from "react";
import UserVideo from "~/components/UserVideo";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx("wrapper")}>
            <UserVideo />
            <UserVideo />
            <UserVideo />
        </div>
    );
}

export default Home;