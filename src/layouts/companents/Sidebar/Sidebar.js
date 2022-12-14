import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import { HomeIcon, LiveIcon, UserIcon } from "~/components/icons";
import SuggestedAccounts from "~/components/SuggestedAccounts";
import Hashtag from "~/components/Hashtag";

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
></meta>;

const cx = classNames.bind(styles);
function SideBar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For Your"
          to={config.router.home}
          icon={<HomeIcon />}
        />
        <MenuItem
          title="Following"
          to={config.router.following}
          icon={<UserIcon />}
        />
        <MenuItem title="LIVE" to={config.router.live} icon={<LiveIcon />} />
      </Menu>

      <SuggestedAccounts label="Tài khoản được đề xuất" />
      <SuggestedAccounts label="Tài khoản đã theo dõi" />

      <Hashtag label="Khám phá" />
    </aside>
  );
}

export default SideBar;
