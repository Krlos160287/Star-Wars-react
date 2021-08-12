import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const CharacterCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://www.prensalibre.com/wp-content/uploads/2019/11/luke-skywalker-644x362.jpg?quality=82"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title"> {props.character.name}</h5>
					<p className="card-text"> Gender: {props.character.gender}</p>
					<p className="card-text"> Hair-color: {props.character.hair_color}</p>
					<p className="card-text"> Eye-color: {props.character.eye_color}</p>
					<Link to={"/Character/:uid/"}>
						<button className="btn btn-primary">See more</button>
					</Link>
					{store.favorites.length > 0 && store.favorites.includes(props.character) ? (
						<button style={{ float: "right" }}>
							<a href="#" className="btn btn-warning" style={{ width: "50px" }}>
								<i className="far fa-heart" />
							</a>
						</button>
					) : (
						<button
							onClick={() => {
								actions.addFavorite(props.character);
							}}
							style={{ float: "right" }}>
							<a href="#" className="btn btn-primary" style={{ width: "50px" }}>
								<i className="far fa-heart" />
							</a>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.json
};
