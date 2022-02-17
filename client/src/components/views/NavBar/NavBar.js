import React, {useState} from "react";
import {Drawer, Button, Icon} from "antd";
import {Link} from "react-router-dom";

import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";

import logo from "./logo/logo.svg";
import "./Sections/Navbar.css";

function NavBar() {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<nav className="menu" style={{position: "fixed", zIndex: 5, width: "100%"}}>
			<div className="menu__logo">
				<Link to="/">
					<img src={logo} alt="" />
				</Link>
			</div>
			<div className="menu__container">
				<div className="menu_left">
					<LeftMenu mode="horizontal" />
				</div>
				<div className="menu_right">
					<RightMenu mode="horizontal" />
				</div>
				<Button
					className="menu__mobile-button"
					type="primary"
					onClick={showDrawer}
				>
					<Icon type="align-right" />
				</Button>
				<Drawer
					title="카테고리 메뉴"
					placement="right"
					className="menu_drawer"
					closable={false}
					onClose={onClose}
					visible={visible}
				>
					<LeftMenu mode="inline" />
					<RightMenu mode="inline" />
				</Drawer>
			</div>
		</nav>
	);
}

export default NavBar;
