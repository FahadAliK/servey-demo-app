import React, { Component } from 'react';
import { Survey } from 'survey-react';
// import Survey from 'survey-react';

import './App.css';

const options = 'Not at all,Several days,More than half the days,Nearly every day'.split(
	','
);

const optionsToScore = {
	'Not at all': 0,
	'Several days': 1,
	'More than half the days': 2,
	'Nearly every day': 3,
};

var surveyJSON = {
	title: 'Survey App Demo',
	pages: [
		{
			name: 'page1',
			questions: [
				{
					type: 'radiogroup',
					choices: options,
					isRequired: true,
					name: 'question 1',
					title: 'Little interest or pleasure in doing things',
				},
			],
		},
		{
			name: 'page2',
			questions: [
				{
					type: 'radiogroup',
					choices: options,
					isRequired: true,
					name: 'question 2',
					title: 'Feeling down, depressed, or hopeless',
				},
			],
		},
		{
			name: 'page3',
			questions: [
				{
					type: 'radiogroup',
					choices: options,
					isRequired: true,
					name: 'question 3',
					title: 'Trouble falling or staying asleep, or sleeping too much',
				},
			],
		},
		{
			name: 'page4',
			questions: [
				{
					type: 'radiogroup',
					choices: options,
					isRequired: true,
					name: 'question 4',
					title: 'Feeling tired or having little energy',
				},
			],
		},
		{
			name: 'page5',
			questions: [
				{
					type: 'radiogroup',
					choices: options,
					isRequired: true,
					name: 'question 5',
					title: 'Poor appetite or overeating',
				},
			],
		},
		{
			name: 'page6',
			questions: [
				{
					type: 'radiogroup',
					choices: options,
					isRequired: true,
					name: 'question 6',
					title:
						'Feeling bad about yourself — or that you are a failure or have let yourself or your family down ',
				},
			],
		},
		{
			name: 'page7',
			questions: [
				{
					type: 'radiogroup',
					choices: options,
					isRequired: true,
					name: 'question 7',
					title:
						'Trouble concentrating on things, such as reading the newspaper or watching television',
				},
			],
		},
		{
			name: 'page8',
			questions: [
				{
					type: 'radiogroup',
					choices: options,
					isRequired: true,
					name: 'question 8',
					title:
						'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual',
				},
			],
		},
		{
			name: 'page9',
			questions: [
				{
					type: 'radiogroup',
					choices: options,
					isRequired: true,
					name: 'question 9',
					title:
						'Thoughts that you would be better off dead or of hurting yourself in some way',
				},
			],
		},
	],
};

const questions = [
	{
		title: 'title of question 1',
		options: options,
	},
	{
		title: 'title of question 2',
		options: options,
	},
	{
		title: 'title of question 3',
		options: options,
	},
];

class App extends Component {
	sendDataToServer = (survey) => {
		const scores = [];
		// console.log('sending data to server');
		// console.log(survey.data);
		for (const key in survey.data) {
			// console.log(survey.data[key]);
			// console.log(typeof survey.data[key]);
			// console.log(optionsToScore['Not at all']);
			// console.log(optionsToScore[survey.data[key]]);
			scores.push(optionsToScore[survey.data[key]]);
		}
		console.log(scores);
		const sum = scores.reduce(
			(prevValue, currentValue) => (prevValue += currentValue),
			0
		);
		console.log(sum);
	};
	render() {
		return (
			<div className='App'>
				<Survey json={surveyJSON} onComplete={this.sendDataToServer} />
			</div>
		);
	}
}

export default App;
