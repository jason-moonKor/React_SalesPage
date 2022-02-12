import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {
	getCartItems,
	removeCartItem,
	onSuccessBuy
} from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";
import {Empty, Result} from "antd";
import Paypal from "../../utils/Paypal";

function CartPage(props) {
	const dispatch = useDispatch();

	const [Total, setTotal] = useState(0);
	const [ShowTotal, setShowTotal] = useState(false);
	const [ShowSuccess, setShowSuccess] = useState(false);

	useEffect(() => {
		let cartItems = [];

		//리덕스 User state안에 cart안에 상품이 들어있는지 확인
		if (props.user.userData && props.user.userData.cart) {
			if (props.user.userData.cart.length > 0) {
				props.user.userData.cart.forEach((item) => {
					cartItems.push(item.id);
				});
				dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
					(response) => {
						calculateTotal(response.payload);
					}
				);
			}
		}
	}, [props.user.userData]);

	let calculateTotal = (cartDetail) => {
		let total = 0;

		cartDetail.map((item) => {
			total += parseInt(item.price, 10) * item.quantity;
		});
		setTotal(total);
		setShowTotal(true);
	};

	let removeFromCart = (productId) => {
		dispatch(removeCartItem(productId)).then((response) => {
			if (response.payload.productInfo.length <= 0) {
				setShowTotal(false);
			}
		});
	};

	const transactionSuccess = (data) => {
		dispatch(
			onSuccessBuy({
				paymentData: data,
				cartDetail: props.user.cartDetail
			})
		).then((response) => {
			if (response.payload.success) {
				setShowTotal(false);
				setShowSuccess(true);
			}
		});
	};

	return (
		<div style={{width: "85%", margin: "3rem auto"}}>
			<h1>장바구니</h1>
			<div>
				<UserCardBlock
					products={props.user.cartDetail}
					removeItem={removeFromCart}
				/>
			</div>
			<div>
				{ShowTotal ? (
					<div style={{marginTop: "3rem", float: "right"}}>
						<h2>총 금액 : {Total}원</h2>
						<Paypal total={Total} onSuccess={transactionSuccess} />
					</div>
				) : ShowSuccess ? (
					<Result status="success" title="결제가 완료 되었습니다!!!" />
				) : (
					<>
						<br />
						<Empty description={false} />
					</>
				)}
			</div>
		</div>
	);
}

export default CartPage;
