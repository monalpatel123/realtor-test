import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Table.css";
const Table = ({ tableData }) => {
	const [sortConf, setSortConfig] = useState(null);
	const assignKeyDirection = (key) => {
		// function to assign the key and sorting order
		let order = "ascending";
		if (sortConf?.key == key && sortConf?.order == "ascending") {
			order = "descending";
		}
		setSortConfig({ key, order });
	};
	const renderDirection = (key) => {
		if (sortConf === null) {
			return;
		}
		if (sortConf.key === key) {
			return <>{sortConf.order === "descending" ? `☝️` : `👇`}</>;
		} else {
			return;
		}
	};
	useMemo(() => {
		if (sortConf !== null) {
			tableData.sort((a, b) => {
				if (a.properties[sortConf.key] > b.properties[sortConf.key]) {
					return sortConf.order === "ascending" ? 1 : -1;
				} else {
					return sortConf.order === "ascending" ? -1 : 1;
				}
				return 0;
			});
		}
	}, [tableData, sortConf]);
	const renderTime = (timeString) => {
		const date = new Date(timeString);
		return (
			<td>
				{date.toLocaleTimeString("en-US", {
					year: "numeric",
					month: "long",
					day: "numeric",
				})}
			</td>
		);
	};
	const renderTable = () => {
		return (
			<table className="table-container">
				<thead className="table-header">
					<tr>
						<th onClick={() => assignKeyDirection("place")}>
							Title {renderDirection("place")}
						</th>
						<th onClick={() => assignKeyDirection("mag")}>
							Magnitude {renderDirection("mag")}
						</th>
						<th onClick={() => assignKeyDirection("time")}>
							Time {renderDirection("time")}
						</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((item, index) => {
						return (
							<tr className="table-row" key={item.id}>
								<td className="table-first-col">
									<Link
										to={{
											pathname: `/${encodeURIComponent(
												item.properties.place
											)}`,
											state: item,
										}}
										className={"link"}
									>
										{item.properties.place}
									</Link>
								</td>
								<td className="table-second-col">
									{item.properties.mag}
								</td>
								{renderTime(item.properties.time)}
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	};
	return <div className="row center">{renderTable()}</div>;
};

export default Table;
