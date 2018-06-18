import React from "react";

const Output = props => {
	return (
		<div className="output">
			{props.text && <div dangerouslySetInnerHTML={{ __html: props.text }} />}
		</div>
	);
};

export default Output;
