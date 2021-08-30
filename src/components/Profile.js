import React from "react";
import "./Profile.css";

const Profile = ({ profileData }) => {
	return (
		<div className="row center">
			<div className="profile-container col center-hor">
				<h1>Profile</h1>
				<div className="row center" style={{ marginTop: "25px" }}>
					{/* Image side */}
					<img
						src={profileData.avatarImage}
						className="avatar-image"
					/>
					{/* Details */}
					<div className="detail">
						<table>
							<tbody>
								<tr>
									<td>
										<h5>First Name</h5>
									</td>
									<td>
										<p>{profileData.firstName}</p>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Last Name</h5>
									</td>
									<td>
										<p>{profileData.lastName}</p>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Phone</h5>
									</td>
									<td>
										<p>{profileData.phone}</p>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Email</h5>
									</td>
									<td>
										<p>{profileData.email}</p>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Bio</h5>
									</td>
									<td>
										<p>{profileData.bio}</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
