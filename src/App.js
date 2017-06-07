import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import DataList from './DataList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import WerryWashers from './components/WerryWashers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
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

        this.setState({
        allData: response.data,
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
      <div>
        <h2>WashyWashy Frontend</h2>
        <DataList Data={this.state.allData}/>
      </div>
      <div>
      </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
