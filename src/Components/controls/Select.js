import React, { Component } from "react";

export class Select extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.value
		};
	}

	onChange(e) {
		this.setState(
			{
				value: e.target.value
			},
			() => {
				this.props.onChange(this.state.value);
			}
		);
	}

	render() {
		return (
			<div>
				<select onChange={this.onChange.bind(this)}>
					<option value="all-meat">All meat</option>
					<option value="meat-and-filler">Meat and fillet</option>
				</select>
			</div>
		);
	}
}

export default Select;
