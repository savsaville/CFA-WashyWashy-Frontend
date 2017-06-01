import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import DataList from './DataList';
import { Col, Card, CardTitle} from 'react-materialize';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      cycles: 0,
      name: '',
      size: ''
    }
  };

  componentDidMount() {
    this.getWashWashyDetails();
  };

  getWashWashyDetails() {
    const URL =
    'https://liquidlaundromats.herokuapp.com/api'
    axios.get(URL)
      .then((response) => {
        console.log(response.data);
        console.log(response.data[0].cycles);

        this.setState({
        allData: response.data,
        cycles: response.data[0].cycles
      });
      })
      .catch(function (error) {
        console.log(error);
      });
  }




  render() {
    return (
      <MuiThemeProvider>
      <div>
        <h2>WashyWashy Frontend</h2>
        <Col s={6} z-depth={4}>
          <Card header={<CardTitle reveal image={require('./images/dryer.jpg')} waves='light'/>}
              title={<h4>Dryer01</h4>}
              reveal={<p className="text">Power consumption is currently at 1390kj <br/>
              Size is Single, Number of cycles per day is 20</p>}>


              <p><a href="#">Click here for perfomance analysis</a></p>

          </Card>
        </Col>
        <MyAwesomeReactComponent />
        <DataList Data={this.state.allData}
                  Cycles={this.state.cycles}/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
