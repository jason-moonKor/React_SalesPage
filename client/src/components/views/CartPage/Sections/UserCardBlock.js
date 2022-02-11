import React from "react";
import "./UserCardBlock.css";

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
			<tr key={idx}>
				<td>
					<img
						style={{width: "70px"}}
						alt="product"
						src={renderCartImage(product.images)}
					/>
				</td>
				<td>{product.quantity} 개</td>
				<td>{product.price}</td>
				<td>
					<button onClick={() => props.removeItem(product._id)}>
						장바구니에서 제거
					</button>
				</td>
			</tr>
		));

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>제품 이미지</th>
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
