import React, { useState } from "react";
import Select from "react-select";

export default function Filter(props) {
	const [endPoint, setEndPoint] = useState("everything");
	const [country, setCountry] = useState("in");
	const [category, setCategory] = useState("health");
	const [phrase, setPhrase] = useState("");
	const [sortBy, setsortBy] = useState("relevancy");
	const [pageSize, setPageSize] = useState(20);

	const endpointOptions = [
		{ value: "top-headlines", label: "Top Headlines" },
		{ value: "everything", label: "Everything" },
		{ value: "sources", label: "Sources" }
	];
	const countryOptions = [
		{ value: "ae", label: "United Arab Emirates" },
		{ value: "ar", label: "Argentina" },
		{ value: "at", label: "Austria" },
		{ value: "au", label: "Australia" },
		{ value: "be", label: "Belgium" },
		{ value: "bg", label: "Bulgaria" },
		{ value: "br", label: "Brazil" },
		{ value: "ca", label: "Canada	" },
		{ value: "ch", label: "Switzerland" },
		{ value: "cn", label: "China" },
		{ value: "co", label: "Colombia" },
		{ value: "cu", label: "Cuba" },
		{ value: "cz", label: "Czechia" },
		{ value: "de", label: "Germany" },
		{ value: "eg", label: "eg" },
		{ value: "fr", label: "France" },
		{ value: "gb", label: "gb" },
		{ value: "gr", label: "gr" },
		{ value: "hk", label: "hk" },
		{ value: "hu", label: "hu" },
		{ value: "id", label: "id" },
		{ value: "ie", label: "ie" },
		{ value: "il", label: "il" },
		{ value: "in", label: "in" },
		{ value: "it", label: "it" },
		{ value: "jp", label: "jp" },
		{ value: "kr", label: "kr" },
		{ value: "lt", label: "lt" },
		{ value: "lv", label: "lv" },
		{ value: "ma", label: "ma" },
		{ value: "mx", label: "mx" },
		{ value: "my", label: "my" },
		{ value: "ng", label: "ng" },
		{ value: "nl", label: "nl" },
		{ value: "no", label: "no" },
		{ value: "nz", label: "nz" },
		{ value: "ph", label: "ph" },
		{ value: "pl", label: "pl" },
		{ value: "pt", label: "pt" },
		{ value: "ro", label: "ro" },
		{ value: "rs", label: "rs" },
		{ value: "ru", label: "ru" },
		{ value: "sa", label: "sa" },
		{ value: "se", label: "se" },
		{ value: "sg", label: "sg" },
		{ value: "si", label: "si" },
		{ value: "sk", label: "sk" },
		{ value: "th", label: "th" },
		{ value: "tr", label: "tr" },
		{ value: "tw", label: "tw" },
		{ value: "ua", label: "ua" },
		{ value: "us", label: "us" },
		{ value: "ve", label: "ve" },
		{ value: "za", label: "za" },
	];
	const categoryOptions = [
		{ value: "business", label: "Business" },
		{ value: "entertainment", label: "Entertainment" },
		{ value: "general", label: "General" },
		{ value: "health", label: "Health" },
		{ value: "science", label: "Science" },
		{ value: "sports", label: "Sports" },
		{ value: "technology", label: "Technology" },
	];
	const sortByOptions = [
		{ value: "relevancy", label: "Relevancy" },
		{ value: "popularity", label: "Popularity" },
		{ value: "publishedAt", label: "Date - Newest First" }
	];
	const handleCountryChange = (myCountry) => {
		setCountry(myCountry.value);
	};
	const handleEndPointChange = (e) => {
		setEndPoint(e.value);
	};
	const handleCategoryChange = (e) => {
		setCategory(e.value);
	};
	const handleSortByChange = (e) => {
		setsortBy(e.value);
	};
	const handleSubmitFiltersEvent = () => {
		const myFilters = {
			endPoint,
			country,
			category,
			pageSize,
			phrase,
			sortBy
		};
		props.filterFunction(myFilters);
		setCountry("");
		setEndPoint("");
		setPageSize(20);

	};
	return (
		<div className="filterModal text-dark">
			<button 
				type="button"
				className="btn btn-light my-2 mx-4"
				data-toggle="modal"
				data-target="#exampleModalScrollable"
			>
			<span><i className="fas fa-filter"></i></span>	Filter
			</button>

			<div
				className="modal fade"
				id="exampleModalScrollable"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalScrollableTitle"
				aria-hidden="true"
			>
				<div
					className="modal-dialog modal-dialog-scrollable"
					style={{ height: "300em" }}
					role="document"
				>
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalScrollableTitle">
								Choose your preferences <span role="img" aria-label="emoji here">&#128522;</span>
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<h5>Select Endpoint</h5>
							<Select
								onChange={(e) => handleEndPointChange(e)}
								options={endpointOptions}
							/>
							<br />
							{endPoint === "top-headlines" && (
								<div>
										<h5>Select category</h5>
										<Select
											options={categoryOptions}
											onChange={(e) => handleCategoryChange(e)}
										/>
										<br />
										<h5>Select Country</h5>
										<Select
											onChange={(e) => handleCountryChange(e)}
											options={countryOptions}
										/>
										<br />
								</div>
							)}
							{endPoint === "everything" && (
								<div>
									<h5>Sort By</h5>
									<Select
										onChange={(e) => handleSortByChange(e)}
										options={sortByOptions}
									/>
									<br />
									<h5>Filter by keyword/phrase</h5>
									<input
										type="text"
										placeholder="Enter keyword"
										onChange={(e) => setPhrase(e.target.value)}
										required
									/>
									<br />
								</div>
							)}
							{endPoint === "sources" && (
								<div>
												<h5>Select category</h5>
										<Select
											options={categoryOptions}
											onChange={(e) => handleCategoryChange(e)}
										/>
										<br />
										<h5>Select Country</h5>
										<Select
											onChange={(e) => handleCountryChange(e)}
											options={countryOptions}
										/>
										<br />
								</div>
							)}
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Cancel
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => handleSubmitFiltersEvent()}
								data-dismiss= "modal"
							>
								Apply Filter
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
