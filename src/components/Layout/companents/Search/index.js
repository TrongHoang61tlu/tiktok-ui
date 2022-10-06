import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import request from "~/utils/request";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AcountItem from "~/components/AccountItem";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "~/components/hooks";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoadding] = useState(false);
  const debounce = useDebounce(searchValue, 800)

  const inputRef = useRef();
  useEffect(() => {
    if(!debounce.trim()){
      setSearchResult([])
      return;
    }
    setLoadding(true);

    request.get( 'users/search', {
      params: {
        q: debounce,
        type: 'less'
      }
    })
    .then(res =>{
      setSearchResult(res.data.data);
      setLoadding(false);
    })
    .catch(() =>{
      setLoadding(false);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ') ){
      setSearchValue(searchValue);

    }
  }
  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Tài khoản</h4>
            {searchResult.map((result) => (

            <AcountItem key={result.id} data ={result} />
            ))}
            
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Tìm kiếm tài khoản và video"
          spellCheck={false}
          onChange= {handleChange}
          onFocus={() => setShowResult(true)}
        />

        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loading && <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />}

        <button className={cx("search-btn")} onMouseDown ={(e) => e.preventDefault()}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
