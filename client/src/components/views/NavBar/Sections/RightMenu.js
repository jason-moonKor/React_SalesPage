/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {Menu, Icon, Badge} from "antd";
import axios from "axios";
import {USER_SERVER} from "../../../Config";
import {withRouter} from "react-router-dom";
import {useSelector} from "react-redux";

function RightMenu(props) {
	const user = useSelector((state) => state.user);

	const logoutHandler = () => {
		axios.get(`${USER_SERVER}/logout`).then((response) => {
			if (response.status === 200) {
				props.history.push("/login");
			} else {
				alert("Log Out Failed");
			}
		});
	};

	if (user.userData && !user.userData.isAuth) {
		return (
			<Menu mode={props.mode}>
				<Menu.Item key="mail" className="login_color">
					<a href="/login">로그인</a>
				</Menu.Item>
				<Menu.Item key="app" className="login_color">
					<a href="/register">회원가입</a>
				</Menu.Item>
			</Menu>
		);
	} else {
		return (
			<Menu mode={props.mode}>
				<Menu.Item key="upload">
					<a href="/product/upload">
						<span className="Nav-Menu-list">상품등록하기</span>
					</a>
				</Menu.Item>
				<Menu.Item key="history">
					<a href="/history">
						<span className="Nav-Menu-list">결제 정보</span>
					</a>
				</Menu.Item>
				{/* 카트 아이콘 */}
				<Menu.Item key="cart" style={{paddingBottom: 3}}>
					<Badge count={user.userData && user.userData.cart.length}>
						<a
							href="/user/cart"
							className="head-example"
							style={{marginRight: -22, color: "#66777"}}
						>
							<Icon
								type="shopping-cart"
								style={{fontSize: 30, marginBottom: 3}}
							/>
						</a>
					</Badge>
				</Menu.Item>
				<Menu.Item key="logout">
					<a onClick={logoutHandler}>
						<span className="Nav-Menu-list">로그아웃</span>
					</a>
				</Menu.Item>
			</Menu>
		);
	}
}

export default withRouter(RightMenu);
