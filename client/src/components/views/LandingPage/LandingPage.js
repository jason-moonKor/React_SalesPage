import React, {useEffect, useState} from "react";
import axios from "axios";
import {Col, Card, Row, Button, Carousel} from "antd";
// import Meta from "antd/lib/card/Meta";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Section/CheckBox";
import {continents, price} from "./Section/Datas";
import RadioBox from "./Section/RadioBox";
import SearchFeature from "./Section/SearchFeature";

import first_slide from "./Images/slide1.jpg";
import second_slide from "./Images/slide2.jpg";
import third_slide from "./Images/slide3.jpg";

import "./Section/Landing.css";

function LandingPage() {
	const {Meta} = Card;

	const [Products, setProducts] = useState([]);
	const [Skip, setSkip] = useState(0);
	const [Limit, setLimit] = useState(8);
	const [PostSize, setPostSize] = useState(0);
	const [Filters, setFilters] = useState({
		continents: [],
		price: []
	});
	const [SearchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		let body = {
			skip: Skip,
			limit: Limit
		};

		getProducts(body);
	}, []);

	const getProducts = (body) => {
		axios.post("/api/product/products", body).then((response) => {
			if (response.data.success) {
				if (body.loadMore) {
					setProducts([...Products, ...response.data.productInfo]);
				} else {
					setProducts(response.data.productInfo);
				}
				setPostSize(response.data.postSize);
			} else {
				alert("상품들을 가져오는데 실패했습니다");
			}
		});
	};

	const loadMoreHandler = () => {
		let skip = Skip + Limit;

		let body = {
			skip: skip,
			limit: Limit,
			loadMore: true
		};

		getProducts(body);
		setSkip(skip);
	};

	const renderCards = Products.map((product, index) => {
		return (
			<Col lg={6} md={8} xs={24} key={index}>
				<Card
					cover={
						<a href={`/product/${product._id}`}>
							<ImageSlider images={product.images} />
						</a>
					}
				>
					<Meta
						className="meta_tag"
						title={product.title}
						description={`${product.price}원`}
					/>
				</Card>
			</Col>
		);
	});

	const showFilteredResults = (filters) => {
		let body = {
			skip: 0,
			limit: Limit,
			filters: filters
		};
		getProducts(body);
		setSkip(0);
	};

	const handlePrice = (value) => {
		const data = price;
		let array = [];

		for (let key in data) {
			if (data[key]._id === parseInt(value, 10)) {
				array = data[key].array;
			}
		}
		return array;
	};

	const handleFilters = (filters, category) => {
		const newFilters = {...Filters};
		newFilters[category] = filters;

		if (category === "price") {
			let priceValues = handlePrice(filters);
			newFilters[category] = priceValues;
		}

		showFilteredResults(newFilters);
		setFilters(newFilters);
	};

	const updateSearchTerm = (newSearchTerm) => {
		setSearchTerm(newSearchTerm);

		let body = {
			skip: 0,
			limit: Limit,
			filters: Filters,
			searchTerm: newSearchTerm
		};
		setSkip(0);
		setSearchTerm(newSearchTerm);
		getProducts(body);
	};

	return (
		<div style={{width: "75%", margin: "3rem auto"}}>
			{/* 메인 상단 슬라이드 이미지 SECTION */}
			<div>
				<Carousel autoplay>
					<div>
						<a
							className="main_slide"
							href="http://localhost:3000/product/6207ac1e44cf40453c315a3f"
							style={{backgroundImage: `url(${first_slide})`}}
						></a>
					</div>
					<div>
						<div className="main_slide">
							<a
								className="main_slide"
								href="http://localhost:3000/product/6207b392c831962c089953f3"
								style={{backgroundImage: `url(${second_slide})`}}
							></a>
						</div>
					</div>
					<div>
						<div className="main_slide">
							<a
								className="main_slide"
								href="http://localhost:3000/product/6207b31dc831962c089953f0"
								style={{
									backgroundImage: `url(${third_slide})`
								}}
							></a>
						</div>
					</div>
				</Carousel>
			</div>

			{/* 필터 체크박스 Section */}
			<Row gutter={[16, 16]}>
				<Col lg={12} xs={24}>
					{/* CheckBOx */}
					<CheckBox
						list={continents}
						handleFilters={(filters) => handleFilters(filters, "continents")}
					/>
				</Col>
				<Col lg={12} xs={24}>
					{/* Radio Box */}
					<RadioBox
						list={price}
						handleFilters={(filters) => handleFilters(filters, "price")}
					/>
				</Col>
			</Row>

			{/* 검색기능 section */}
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
					margin: "1rem auto"
				}}
			>
				<SearchFeature refreshFunction={updateSearchTerm} />
			</div>

			{/* 제품 이미지 Section */}
			<Row gutter={[16, 16]}>{renderCards}</Row>
			<br />

			{/* 8개 이상 상품이 있으면 더보기 버튼 true, 없으면 false */}
			{PostSize >= Limit && (
				<div style={{display: "flex", justifyContent: "center"}}>
					<Button
						size="large"
						shape="round"
						type="danger"
						onClick={loadMoreHandler}
					>
						제품 더보기
					</Button>
				</div>
			)}
		</div>
	);
}

export default LandingPage;
