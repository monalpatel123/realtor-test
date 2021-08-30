import React from "react";
import Navbar from "./components/Navbar";
import data from "./data";
import "./App.css";
import Table from "./components/Table";
import { Route, Switch } from "react-router";
import DataPoint from "./components/DataPoint";
import Profile from "./components/Profile";
const App = () => {
	return (
		<div>
			{/* Navbar */}
			<Navbar navData={data.site} profileData={data.profile} />
			{/* Heading text */}
			<Switch>
				<Route
					path="/profile"
					render={(props) => (
						<Profile {...props} profileData={data.profile} />
					)}
				/>
				<Route path="/" exact>
					<div className="row center">
						<h3 className="heading-text">
							USGS All Earthquakes, Past Hour
						</h3>
					</div>
					<Table tableData={data.data.features} />
				</Route>
				<Route path="/:earthQuake" component={DataPoint} />
			</Switch>
		</div>
	);
};

export default App;
