import React from 'react';

import './Question.css';

const clickHandler = (event) => {
	if (event.target.className === 'Selected') {
		event.target.className = 'Options-Item';
	} else {
		event.target.className = 'Selected';
	}
	console.log(event.target.textContent);
};

const question = (props) => {
	return (
		<div className='Question'>
			<label className='Label'>{props.title}</label>
			<div className='Options-Container'>
				<ul className='Options-List'>
					{props.options.map((option) => (
						<li
							className='Options-Item'
							key={Math.random()}
							onClick={(event) => {
								clickHandler(event);
								props.clicked(event);
							}}>
							{option}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default question;
