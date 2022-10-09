import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import config from "~/config";
import Menu, {MenuItem} from "./Menu";
import { HomeIcon, LiveIcon, UserIcon } from "~/components/icons";
const cx = classNames.bind(styles);
function SideBar() {
  return <aside className={cx("wrapper")}>
    <Menu>
      <MenuItem  title = "For Your" to = {config.router.home} icon = {<HomeIcon />} />
      <MenuItem  title = "Following" to = {config.router.following} icon = {<UserIcon/>} />
      <MenuItem  title = "LIVE" to = {config.router.live} icon = {<LiveIcon/>} />
    </Menu>
  </aside>;
}

export default SideBar;
