import React, {useState} from "react";
import Dropzone from "react-dropzone";
import {Icon} from "antd";
import axios from "axios";

function FileUpload(props) {
	const [Images, setImages] = useState([]);

	const dropHandler = (files) => {
		let formData = new FormData();

		const config = {
			header: {"content-type": "multipart/form-data"}
		};
		formData.append("file", files[0]);

		axios.post("/api/product/image", formData, config).then((response) => {
			if (response.data.success) {
				setImages([...Images, response.data.filePath]);

				props.refreshFunction([...Images, response.data.filePath]);
			} else {
				alert("파일을 저장하는데 실패했습니다");
			}
		});
	};

	const deleteHandler = (image) => {
		const currentIndex = Images.indexOf(image);
		let newImages = [...Images];
		newImages.splice(currentIndex, 1);
		setImages(newImages);

		props.refreshFunction(newImages);
		alert("이미지를 삭제했습니다");
	};

	return (
		<div style={{display: "flex", justifyContent: "space-between"}}>
			<Dropzone onDrop={dropHandler}>
				{({getRootProps, getInputProps}) => (
					<section>
						<div
							style={{
								width: 300,
								height: 240,
								border: "1px solid lightgray",
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							}}
							{...getRootProps()}
						>
							<input {...getInputProps()} />
							<Icon type="plus" style={{fontSize: "4rem"}} />
						</div>
						<br />
						<div
							style={{fontSize: "1.1rem", color: "tomato", fontWeight: "bold"}}
						>
							마지막순서로 등록하는 사진은 제품 상세이미지가 됩니다
						</div>
						<div
							style={{fontSize: "1.1rem", color: "tomato", fontWeight: "bold"}}
						>
							등록된 사진을 클릭하면 삭제됩니다
						</div>
					</section>
				)}
			</Dropzone>

			<div
				style={{
					display: "flex",
					width: "350px",
					height: "240px",
					overflowX: "scroll"
				}}
			>
				{Images.map((image, index) => (
					<div onClick={() => deleteHandler(image)} key={index}>
						<img
							style={{minWidth: "300px", width: "300px", height: "240px"}}
							src={`http://localhost:5000/${image}`}
							alt=""
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default FileUpload;
