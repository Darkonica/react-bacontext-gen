import React, { Component } from "react";
import Output from "./Output";
import Text from "./controls/Text";
import Select from "./controls/Select";
import axios from "axios";

import "../styles/style.css";

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paras: 5,
			type: "all-meat",
			text: ""
		};
	}

	componentWillMount() {
		this.getText();
	}

	getText() {
		axios
			.get(
				`https://baconipsum.com/api/?type=${this.state.type}&paras=${
					this.state.paras
				}`
			)
			.then(response => {
				response.data = response.data
					.map(para => "<p>" + para + "</p>")
					.join("");
				this.setState({ text: response.data });
			})
			.catch(err => {
				console.log(err);
			});
	}

	handleParas(paras) {
		this.setState(
			{
				paras
			},
			this.getText
		);
	}

	handleType(type) {
		this.setState(
			{
				type
			},
			this.getText
		);
	}

	render() {
		return (
			<div className="container">
				<h1>BaconText Generator</h1>

				<Output text={this.state.text} />

				<h3>Real Time Options</h3>
				<form action="">
					<div>
						<div>Paragraphs: </div>
						<Text
							value={this.state.paras}
							onChange={this.handleParas.bind(this)}
						/>
					</div>
					<div>
						<div>Type: </div>
						<Select
							value={this.state.type}
							onChange={this.handleType.bind(this)}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default App;
