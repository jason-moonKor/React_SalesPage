import React, {useState} from "react";
import {Input} from "antd";
const {Search} = Input;

function SearchFeature(props) {
	const [SearchTerm, setSearchTerm] = useState("");

	const searchHandler = (e) => {
		setSearchTerm(e.currentTarget.value);
		props.refreshFunction(e.currentTarget.value);
	};
	return (
		<div>
			<Search
				onChange={searchHandler}
				placeholder="검색어를 입력하세요"
				allowClear
				style={{width: 300}}
				value={SearchTerm}
			/>
		</div>
	);
}

export default SearchFeature;
