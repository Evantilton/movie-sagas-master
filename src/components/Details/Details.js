import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

class Details extends Component {

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    this.props.dispatch({ type: 'GET_MOVIES' });
  }

  backToList = () => this.props.history.push('/')
  edit = () => this.props.history.push('/edit')

  render() {
    return (

      <div>
        <>

          <Card>
            <Card.Body>
              <Card.Title>{this.props.storedMovie.title}</Card.Title>
              <Card.Text>{this.props.storedMovie.description}  </Card.Text>
            </Card.Body>

          </Card>
        </>
        <footer>
          <button onClick={this.backToList}>Back to List</button>

          <button onClick={this.edit}>Edit</button>
        </footer>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Details);