import React, {useState} from "react";
import {Typography, Button, Form, Input} from "antd";

const {TextArea} = Input;

function UploadProductPage() {
	const [Title, setTitle] = useState("");
	const [Description, setDescription] = useState("");
	const [Price, setPrice] = useState(0);
	const [Continent, setContinent] = useState(1);
	const [Image, setImage] = useState([]);

	const titleChangeHandler = (e) => {
		setTitle(e.currentTarget.value);
	};

	const descriptionChangeHandler = (e) => {
		setDescription(e.currentTarget.value);
	};

	const priceChangeHandler = (e) => {
		setPrice(e.currentTarget.value);
	};

	return (
		<div style={{maxWidth: "700px", margin: "2rem auto"}}>
			<div style={{textAlign: "center", marginBottom: "2rem"}}>
				<h2>여행 상품 업로드</h2>
			</div>

			<Form>
				<br />
				<br />
				<label>이름</label>
				<Input onChange={titleChangeHandler} value={Title} />
				<br />
				<br />
				<label>설명</label>
				<TextArea onChange={descriptionChangeHandler} value={Description} />
				<br />
				<br />
				<label>가격($)</label>
				<Input type="number" onChange={priceChangeHandler} value={Price} />
				<br />
				<br />
				<select>
					<option></option>
				</select>
				<br />
				<br />
				<Button>확인</Button>
			</Form>
		</div>
	);
}

export default UploadProductPage;
