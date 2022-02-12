import React from "react";

function HistoryPage(props) {
	return (
		<div style={{width: "80%", margin: "3rem auto"}}>
			<div style={{textAlign: "center"}}>
				<h1>결제 정보</h1>
			</div>
			<br />
			<table>
				<thead>
					<tr>
						<th>결제 ID</th>
						<th>가격</th>
						<th>수량</th>
						<th>구매 시간</th>
					</tr>
				</thead>
				<tbody>
					{props.user.userData &&
						props.user.userData.history.map((item, idx) => (
							<tr key={idx}>
								<td>{item.id}</td>
								<td>{item.price}</td>
								<td>{item.quantity}</td>
								<td>{item.dateOfPurchase}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}

export default HistoryPage;
