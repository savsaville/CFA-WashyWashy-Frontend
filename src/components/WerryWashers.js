import React, { Component } from 'react';
import { Col, Card, CardTitle} from 'react-materialize';

class WerryWashers extends Component {
  render() {
    return (
      <div>
        <Col s={6} z-depth={4}>
          <Card header={<CardTitle reveal image={require('../images/dryer.jpg')} waves='light'/>}
              title={<h4>Dryer01</h4>}
              reveal={<p className="text">Power consumption is currently at 1390kj <br/>
              Size is Single, Number of cycles per day is 20</p>}>


              <p><a href="#">Click here for perfomance analysis</a></p>

          </Card>
          <Card header={<CardTitle reveal image={require('../images/washingmachine.jpg')} waves='light'/>}
              title={<h4>Washer01</h4>}
              reveal={<p className="text">Power consumption is currently at 1390kj <br/>
              Size is Single, Number of cycles per day is 20</p>}>


              <p><a href="#">Click here for perfomance analysis</a></p>

          </Card>
        </Col>
      </div>
    );
  };
};


export default WerryWashers;
