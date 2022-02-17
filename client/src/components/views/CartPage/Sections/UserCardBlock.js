import React from "react";
import "./UserCardBlock.css";
import {Button} from "antd";

function UserCardBlock(props) {
	const renderCartImage = (images) => {
		if (images.length > 0) {
			let image = images[0];
			return `http://localhost:5000/${image}`;
		}
	};

	const renderItems = () =>
		props.products &&
		props.products.map((product, idx) => (
			<tr key={idx} className="cart_list_text">
				<td>
					<img
						style={{width: "70px"}}
						alt="product"
						src={renderCartImage(product.images)}
					/>
				</td>
				<td>{product.title}</td>
				<td>{product.quantity} 개</td>
				<td>{product.price}</td>
				<td>
					<Button
						size="large"
						shape="round"
						type="danger"
						onClick={() => {
							alert("삭제되었습니다");
							props.removeItem(product._id);
						}}
					>
						장바구니 제거
					</Button>
				</td>
			</tr>
		));

	return (
		<div>
			<table>
				<thead>
					<tr className="cart_list_text">
						<th>제품 이미지</th>
						<th>제품 이름</th>
						<th>제품 수량</th>
						<th>제품 가격</th>
						<th>카트에서 지우기</th>
					</tr>
				</thead>
				<tbody>{renderItems()}</tbody>
			</table>
		</div>
	);
}

export default UserCardBlock;
