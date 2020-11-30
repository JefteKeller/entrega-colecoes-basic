import "./styles.css";

import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Button } from "antd";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";

const NavButtons = ({ setUrl, prevPage, nextPage }) => {
	const history = useHistory();
	const location = useLocation();

	const [pageNum, setPageNum] = useState(0);

	const handleSetPrevUrl = () => {
		if (prevPage) {
			setPageNum(pageNum - 1);
			setUrl({ baseUrl: prevPage });
		}
	};

	const handleSetNextUrl = () => {
		if (nextPage) {
			setPageNum(pageNum + 1);
			setUrl({ baseUrl: nextPage });
		}
	};

	return (
		<div>
			<div className="navButtons">
				<Button onClick={handleSetPrevUrl}>
					<LeftCircleTwoTone />
					Anterior
				</Button>
				<div>{pageNum}</div>
				<Button onClick={handleSetNextUrl}>
					Proximo
					<RightCircleTwoTone />
				</Button>
			</div>
			<Button
				type="primary"
				onClick={() => history.push(`${location.pathname}/favorites`)}
			>
				Favoritos
			</Button>
		</div>
	);
};

export default NavButtons;
