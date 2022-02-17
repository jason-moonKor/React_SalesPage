import React from "react";
import {Icon} from "antd";
import {Link} from "react-router-dom";

function Footer() {
	return (
		<div
			style={{
				height: "70px",
				display: "flex",
				justifyContent: "space-around",
				alignItems: "center",
				fontSize: "1.5rem",
				backgroundColor: "#FFC800",
				color: "whitesmoke"
			}}
		>
			<div className="footer_a">
				<Link to="/">홈</Link> | <a href="#">서비스소개</a> |{" "}
				<a href="#">이용약관</a> | <a href="#">개인정보보호취급</a> |{" "}
				<a href="#">밀수업자들 채용사이트</a>
			</div>
			<div className="footer_logo">
				<a href="#">
					<Icon type="facebook" />
				</a>
				<a href="#">
					<Icon type="twitter" />
				</a>
				<a href="https://github.com/jason-moonKor/react_page" target="_blank">
					<Icon type="github" />
				</a>
			</div>
		</div>
	);
}

export default Footer;
