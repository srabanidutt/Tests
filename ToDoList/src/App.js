import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
constructor(props) {
	super(props);

	// Setting up state
	this.state = {
	userInput : "",
	list:[]
	}
}

// Set a user input value
updateInput(value){
	this.setState({
	userInput: value,
	});
}

// Add item if user input in not empty
addItem(){
	if(this.state.userInput !== '' ){
	const userInput = {

		// Add a random id which is used to delete
		id : Math.random(),

		// Add a user value to list
		value : this.state.userInput
	};

	// Update list
	const list = [...this.state.list];
	list.push(userInput);

	// reset state
	this.setState({
		list,
		userInput:""
	});
	}
}

render(){
	return(<Container>

		<Row style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				fontSize: '3rem',
				fontWeight: 'bolder',
				}}
				>TODO LIST
			</Row>
		<br/>
		<Row>
		<Col md={{ span: 5, offset: 4 }}>

		<InputGroup className="mb-3">
		<FormControl
			placeholder="add new item to your list"
			size="lg"
			value = {this.state.userInput}
			onChange = {item => this.updateInput(item.target.value)}
			
		/>
		<InputGroup.Append>
			<Button
			variant="dark"
			size="lg"
			onClick = {()=>this.addItem()}
			>
			ADD
			</Button>
		</InputGroup.Append>
		</InputGroup>
	</Col>
</Row>
<Row>
	<Col md={{ span: 5, offset: 4 }}>
		<ListGroup>
		{/* map over and print items */}
		{this.state.list.map((item,index) => {return(

			<ListGroup.Item key={index} variant="dark" >
			{item.value}
			</ListGroup.Item>

		)})}
		</ListGroup>
	</Col>
</Row>
	</Container>
	);
}
}

export default App;
