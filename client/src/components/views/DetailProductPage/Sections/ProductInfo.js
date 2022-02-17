import React from "react";
import {Descriptions, Button} from "antd";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../../_actions/user_actions";

function ProductInfo(props) {
	const dispatch = useDispatch();

	const clickHandler = () => {
		//필요한 정보를 cart필드에다가 넣어주기
		dispatch(addToCart(props.detail._id));
		alert("장바구니에 담았습니다");
	};

	return (
		<div>
			<Descriptions title="제품 상세페이지 입니다">
				<Descriptions.Item label="가격">{props.detail.price}</Descriptions.Item>
				<Descriptions.Item label="제품판매 건수">
					{props.detail.sold}
				</Descriptions.Item>
				<Descriptions.Item label="사용자 검색건수">
					{props.detail.views}
				</Descriptions.Item>
				<Descriptions.Item label="제품 상세설명">
					{props.detail.description}
				</Descriptions.Item>
			</Descriptions>

			<br />
			<br />
			<br />
			<div style={{display: "flex", justifyContent: "center"}}>
				<Button size="large" shape="round" type="danger" onClick={clickHandler}>
					장바구니 담기
				</Button>
			</div>
		</div>
	);
}

export default ProductInfo;
