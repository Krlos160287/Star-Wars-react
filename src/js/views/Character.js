import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { CharacterCard } from "../component/CharacterCard";
import { useParams } from "react-router-dom";

export const Character = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	useEffect(() => {
		actions.getCharacter(id);
	}, []);

	return (
		<div className="container">
			<div className="jumbotron">
				{store.people !== null ? <h1>Personaje: {store.people.name} </h1> : null}
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space content out within the larger container.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
		</div>
	);
};

Character.propTypes = {
	people: PropTypes.json
};
