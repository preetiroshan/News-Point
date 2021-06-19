import React, { useState, useEffect } from "react";
import Card from "../card/Card.jsx";
import uuid from "react-uuid";
import {
	addToReadLaterApi,
	getAllNewsApi,
	getAllNewsApiEverything,
	getAllNewsApiSources,
	getAllNewsApiTopHeadline,
} from "../../Services/dashboardService.js";
import SourceCard from "../card/SourceCard.jsx";

export default function Dashboard(props) {
	const [newsList, setNewsList] = useState([]);
	const [sourceList, setSourceList] = useState([]);
	let token = localStorage.getItem("token");
	useEffect(() => {
		getAllNewsApi().then((data) => {
			setNewsList(data.articles);
		});
	}, []);
	useEffect(() => {
		if (props.filterChoice.endPoint === "top-headlines") {
			getAllNewsApiTopHeadline(props.filterChoice)
				.then((data) => {
					setNewsList(data.articles);
				})
				.catch(() => {
					alert("Please try again");
				});
		} else if (props.filterChoice.endPoint === "everything") {
			getAllNewsApiEverything(props.filterChoice)
				.then((data) => {
					setNewsList(data.articles);
				})
				.catch(() => {
					alert("Keyword is mandatory for this query. Please try again");
				});
		} else if (props.filterChoice.endPoint === "sources") {
			getAllNewsApiSources(props.filterChoice)
				.then((data) => {
					setSourceList(data.sources);
				})
				.catch(() => {
					alert("Please try again");
				});
		}
	}, [props.filterChoice, props.filterChoice.endPoint, token]);

	const readLater = (title) => {
		const newsToBeReadLater = newsList.filter((news) => {
			return news.title === title;
		});
		addToReadLaterApi(newsToBeReadLater);
	};
	return (
		<div className="container py-5">
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4 jumbo-title">Stay Updated, On the Go</h1>
					<p className="lead jumbo-text">
						Welcome to News Point! Your one stop destination to know all that
						happens, round the globe{" "}
						<span role="img" aria-label="globe-emoji">
							&#127757;
						</span>
					</p>
				</div>
			</div>
			{newsList &&
				newsList.map((item) => (
					<div key={uuid()}>
						<Card
							readLater={readLater}
							urlToImage={item.urlToImage}
							title={item.title}
						/>
					</div>
				))}
			{sourceList &&
				sourceList.map((item) => (
					<div key={uuid()}>
						<SourceCard name={item.name} description={item.description} />
					</div>
				))}
		</div>
	);
}
