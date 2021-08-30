// View to show details of earthquake
import React from "react";
import { useHistory, useParams } from "react-router";
import "./DataPoint.css";
const DataPoint = () => {
	const { properties } = useHistory().location.state;
	return (
		<div
			className="row center"
			style={{ margin: "0 2rem", marginTop: "30px" }}
		>
			<div className="col">
				<h2 className="heading">{properties.title}</h2>
				<table className="table-container" style={{ minWidth: "100%" }}>
					<tbody>
						<tr>
							<td>
								<h5>Title</h5>
							</td>
							<td>
								<p>{properties.title}</p>
							</td>
						</tr>
						<tr>
							<td>
								<h5>Magnitude</h5>
							</td>
							<td>
								<p>{properties.mag}</p>
							</td>
						</tr>
						<tr>
							<td>
								<h5>Time</h5>
							</td>
							<td>
								<p>{properties.time}</p>
							</td>
						</tr>
						<tr>
							<td>
								<h5>Status</h5>
							</td>
							<td>
								<p>{properties.status}</p>
							</td>
						</tr>
						<tr>
							<td>
								<h5>Tsunami</h5>
							</td>
							<td>
								<p>{properties.tsunami}</p>
							</td>
						</tr>
						<tr>
							<td>
								<h5>Type</h5>
							</td>
							<td>
								<p>{properties.type}</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DataPoint;
