import React, { Component } from 'react';
import Question from './components/Question';
import './App.css';

const options = 'Not at all,Several days,More than half the days,Nearly every day'.split(
	','
);

const answers = [];

const optionsToScore = {
	'Not at all': 0,
	'Several days': 1,
	'More than half the days': 2,
	'Nearly every day': 3,
};

const questions = [
	{
		title: '1. Little interest or pleasure in doing things',
		options: options,
	},
	{
		title: '2. Feeling down, depressed, or hopeless',
		options: options,
	},
	{
		title: '3. Trouble falling or staying asleep, or sleeping too much',
		options: options,
	},
	{
		title: '4. Feeling tired or having little energy',
		options: options,
	},
	{
		title: '5. Poor appetite or overeating',
		options: options,
	},
	{
		title:
			'6. Feeling bad about yourself - or that you are a failure or have let yourself or your family down',
		options: options,
	},
	{
		title:
			'7. Trouble concentrating on things, such as reading the newspaper or watching television',
		options: options,
	},
	{
		title:
			'8. Moving or speaking so slowly that other people could have noticed Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual',
		options: options,
	},
	{
		title:
			'9. Thoughts that you would be better off dead, or of hurting yourself',
		options: options,
	},
	{
		title:
			'10. If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?',
		options: options,
	},
];

class App extends Component {
	state = {
		showTotal: false,
		totalScore: 0,
	};
	clickedHandler = (event) => {
		const scores = [];
		answers.push(event.target.textContent);
		console.log(answers);
		for (const answer of answers) {
			scores.push(optionsToScore[answer]);
		}
		const sum = scores.reduce(
			(prevValue, currentValue) => (prevValue += currentValue),
			0
		);
		this.totalScore = sum;
	};
	showTotalScore = () => {
		this.setState({ showTotal: true });
	};
	render() {
		return (
			<div className='App'>
				{questions.map((question) => (
					<Question
						key={Math.random()}
						title={question.title}
						options={question.options}
						clicked={this.clickedHandler}
					/>
				))}
				{this.state.showTotal ? (
					<h1>Your Total Score is: {this.totalScore}</h1>
				) : null}
				<button className='next-btn' onClick={this.showTotalScore}>
					Next
				</button>
			</div>
		);
	}
}

export default App;
