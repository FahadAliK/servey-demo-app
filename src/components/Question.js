import React from 'react';

const question = (props) => {
	return (
		<div>
			<label>{props.title}</label>
			<div>
				<ul>
					{props.options.map((option) => (
						<li>{option}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default question;
