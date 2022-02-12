import React from "react";
import {Menu} from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
	return (
		<Menu mode={props.mode}>
			{/* <Menu.Item key="mail">
				<a href="/">
					<span className="Nav-Menu-list">밀수업자</span>
				</a>
			</Menu.Item> */}
			<SubMenu title={<span className="Nav-Menu-list">제품 카테고리</span>}>
				<MenuItemGroup title="모아보기">
					<Menu.Item>전체보기</Menu.Item>
					<Menu.Item>BEST</Menu.Item>
					<Menu.Item>재구매 BEST</Menu.Item>
					<Menu.Item>신규상품</Menu.Item>
				</MenuItemGroup>
				<MenuItemGroup title="종류별">
					<Menu.Item>과일 * 견과 * 쌀</Menu.Item>
					<Menu.Item>수산 * 해산 * 건어물</Menu.Item>
					<Menu.Item>정육 * 계란</Menu.Item>
					<Menu.Item>국 * 반찬 * 메인요리</Menu.Item>
					<Menu.Item>샐러드 * 간편식</Menu.Item>
					<Menu.Item>면 * 양념 * 오일</Menu.Item>
					<Menu.Item>생수 * 음료 * 우유 * 커피</Menu.Item>
				</MenuItemGroup>
			</SubMenu>
		</Menu>
	);
}

export default LeftMenu;
