import React, {useState} from "react";
import {Button, Form, Input} from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";

const {TextArea} = Input;

const Continents = [
	{key: 1, value: "닭고기"},
	{key: 2, value: "돼지고기"},
	{key: 3, value: "소고기"},
	{key: 4, value: "밀키트"},
	{key: 5, value: "반조리"},
	{key: 6, value: "소스류"},
	{key: 7, value: "완제품"}
];

function UploadProductPage(props) {
	const [Title, setTitle] = useState("");
	const [Description, setDescription] = useState("");
	const [Price, setPrice] = useState(0);
	const [Continent, setContinent] = useState(1);
	const [Images, setImages] = useState([]);

	const titleChangeHandler = (e) => {
		setTitle(e.currentTarget.value);
	};

	const descriptionChangeHandler = (e) => {
		setDescription(e.currentTarget.value);
	};

	const priceChangeHandler = (e) => {
		setPrice(e.currentTarget.value);
	};

	const continentChangeHandler = (e) => {
		setContinent(e.currentTarget.value);
	};

	const updateImages = (newImages) => {
		setImages(newImages);
	};

	const submitHandler = (e) => {
		e.preventDefault(); //눌렀을때 새로고침안되게

		if (!Title || !Description || !Price || !Continent || !Images) {
			return alert("모든 제품사항을 넣어주셔야 합니다");
		}

		//서버에 채운 값들을 리퀘스트로 보낸다.
		const body = {
			//로그인 된 사람의 ID
			writer: props.user.userData._id,
			title: Title,
			description: Description,
			price: Price,
			images: Images,
			continents: Continent
		};
		Axios.post("/api/product", body).then((response) => {
			if (response.data.success) {
				alert("제품 업로드에 성공했습니다!!");
				props.history.push("/");
			} else {
				alert("제품 업로드에 실패했습니다!!");
			}
		});
	};

	return (
		<div style={{maxWidth: "700px", margin: "2rem auto"}}>
			<div style={{textAlign: "center", marginBottom: "2rem"}}>
				<span style={{fontSize: "2rem"}}>상품 등록 페이지</span>
			</div>

			<Form onSubmit={submitHandler}>
				<FileUpload refreshFunction={updateImages} />

				<br />
				<br />
				<label style={{fontSize: "1.5rem"}}>제품 이름</label>
				<Input onChange={titleChangeHandler} value={Title} />
				<br />
				<br />
				<label style={{fontSize: "1.5rem"}}>제품 설명</label>
				<TextArea onChange={descriptionChangeHandler} value={Description} />
				<br />
				<br />
				<label style={{fontSize: "1.5rem"}}>제품 가격</label>
				<Input type="number" onChange={priceChangeHandler} value={Price} />
				<br />
				<br />
				<select
					onChange={continentChangeHandler}
					value={Continent}
					style={{fontSize: "1.5rem"}}
				>
					{Continents.map((item) => (
						<option key={item.key} value={item.key}>
							{item.value}
						</option>
					))}
				</select>
				<br />
				<br />
				<div style={{display: "flex", justifyContent: "right"}}>
					<Button
						type="danger"
						size="large"
						shape="round"
						onClick={submitHandler}
					>
						저장하기
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default UploadProductPage;
