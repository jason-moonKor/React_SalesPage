import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import Auth from "../hoc/auth";

//views에서 import
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
import CartPage from "./views/CartPage/CartPage";
import HistoryPage from "./views/HistoryPage/HistoryPage";

function App() {
	//null   아무나 접근가능
	//true   로그인한 사용자만 접근가능
	//false  로그인 안한 사용자만 접근가능
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<NavBar />
			<div style={{paddingTop: "69px", minHeight: "calc(100vh - 80px)"}}>
				<Switch>
					<Route exact path="/" component={Auth(LandingPage, null)} />
					<Route exact path="/login" component={Auth(LoginPage, false)} />
					<Route exact path="/register" component={Auth(RegisterPage, false)} />
					<Route
						exact
						path="/product/upload"
						component={Auth(UploadProductPage, true)}
					/>
					<Route
						exact
						path="/product/:productId"
						component={Auth(DetailProductPage, null)}
					/>
					<Route exact path="/user/cart" component={Auth(CartPage, true)} />
					<Route exact path="/history" component={Auth(HistoryPage, true)} />
				</Switch>
			</div>
			<Footer />
		</Suspense>
	);
}

export default App;
