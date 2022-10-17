import React, { useState } from "react";
import { Videos } from "../Video";
import classNames from "classnames/bind";
import styles from "./UserVideo.module.scss"
import Image from "../Image";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles);

function UserVideo() {
    const [like,setLike] = useState({likes :false});

    const handleLike = () =>{
        setLike({
            ...like,
            likes : !like.likes
        }
            
            );
    }
 

    return (
        <div className={cx("container")}>
        
            <Image 
            className={cx("avt-image")} 
            src="" 
            alt=""
            fallback= "https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/bde0d542ad0c559ff67015e13369e03c.jpeg?x-expires=1666105200&x-signature=lItpeVjNtEvs%2B0dtdQzZkkChSf8%3D"
            />
        <div className={cx("main")}>
            <div className={cx("main-top")}>
                <div className={cx("content")}>
                    <h3 className={cx("name")}> Hoang</h3>
                    <h6>ALoALokfgbdgbd</h6>
                </div>
                <div className={cx("button")}>
                    <Button outline>
                        Followw
                    </Button>
                </div>
                
            </div>
            <div className={cx("main-bot")}>
                <div className={cx("video")}>
                    <Videos/>
                </div>
                <div className={cx("list-item")}>
                    <button onClick={handleLike} className={cx("value")}>
                        {!like.likes ? (

                            <span className={cx("icon")} ><FontAwesomeIcon icon={faHeart}  /> </span>
                        ) :(
                            <span className={cx("iconed")} ><FontAwesomeIcon icon={faHeart} /> </span>  
                        ) }
                    
                        <strong className={cx("label")}>0</strong>
                    </button>
                    <button className={cx("value")}>
                        <span className={cx("icon")}><FontAwesomeIcon icon={faComment} /> </span>
                    
                        <strong className={cx("label")}>0</strong>
                    </button>
                    <button className={cx("value")}>
                        <span className={cx("icon")}><FontAwesomeIcon icon={faShare} /> </span>
                    
                        <strong className={cx("label")}>0</strong>
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default UserVideo;
