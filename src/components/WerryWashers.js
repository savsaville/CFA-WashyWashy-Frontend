  import React, { Component } from 'react';
import './WerryWashers.css';
import { Col, Card, CardTitle, Row, CollapsibleItem, Collapsible} from 'react-materialize';

class WerryWashers extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="col l3 m6 s12">
            <Card header={<CardTitle reveal image={require('../images/washingmachine.jpg')} waves='light'/>}
                title={<h4>Washer01</h4>}
                reveal={<Collapsible popout>
                        	<CollapsibleItem header='Power Consumption' icon='power_settings_new'>
                        		Power Consumption today is: 1900kj
                        	</CollapsibleItem>
                        	<CollapsibleItem header='Cycles Today' icon='motorcycle'>
                        		Number of Cycles today: 19
                        	</CollapsibleItem>
                        	<CollapsibleItem header='Money' icon='attach_money'>
                        		Money made by machine is: $39
                        	</CollapsibleItem>
                        </Collapsible>}>
                <p><a href="#">Click here for past machine perfomance</a></p>
            </Card>
          </Col>
          <Col className="col l3 m6 s12">
            <Card className="dryer-wash" header={<CardTitle reveal image={require('../images/washingmachine.jpg')} waves='light'/>}
                title={<h4>Washer02</h4>}
                reveal={<Collapsible popout>
                        	<CollapsibleItem header='Power Consumption' icon='power_settings_new'>
                        		Power Consumption today is: 1900kj
                        	</CollapsibleItem>
                        	<CollapsibleItem header='Cycles Today' icon='motorcycle'>
                        		Number of Cycles today: 19
                        	</CollapsibleItem>
                        	<CollapsibleItem header='Money' icon='attach_money'>
                        		Money made by machine is: $39
                        	</CollapsibleItem>
                        </Collapsible>}>
                <p><a href="#">Click here for past machine perfomance</a></p>

            </Card>
          </Col>
          <Col className="col l3 m6 s12">
            <Card className="dryer-wash" header={<CardTitle reveal image={require('../images/washingmachine.jpg')} waves='light'/>}
                title={<h4>Washer03</h4>}
                reveal={<Collapsible popout>
                        	<CollapsibleItem header='Power Consumption' icon='power_settings_new'>
                        		Power Consumption today is: 1900kj
                        	</CollapsibleItem>
                        	<CollapsibleItem header='Cycles Today' icon='motorcycle'>
                        		Number of Cycles today: 19
                        	</CollapsibleItem>
                        	<CollapsibleItem header='Money' icon='attach_money'>
                        		Money made by machine is: $39
                        	</CollapsibleItem>
                        </Collapsible>}>
                <p><a href="#">Click here for past machine perfomance</a></p>

            </Card>
          </Col>
          <Col className="col l3 m6 s12">
            <Card header={<CardTitle reveal image={require('../images/washingmachine.jpg')} waves='light'/>}
                title={<h4>Washer04</h4>}
                reveal={<Collapsible popout>
                        	<CollapsibleItem header='Power Consumption' icon='power_settings_new'>
                        		Power Consumption today is: 1900kj
                        	</CollapsibleItem>
                        	<CollapsibleItem header='Cycles Today' icon='motorcycle'>
                        		Number of Cycles today: 19
                        	</CollapsibleItem>
                        	<CollapsibleItem header='Money' icon='attach_money'>
                        		Money made by machine is: $39
                        	</CollapsibleItem>
                        </Collapsible>}>
                <p><a href="#">Click here for past machine perfomance</a></p>
            </Card>
          </Col>
          <Col className="col l3 m6 s12">
            <Card className="dryer-wash" header={<CardTitle reveal image={require('../images/washingmachine.jpg')} waves='light'/>}
                title={<h4>Washer05</h4>}
                reveal={<Collapsible popout>
                        	<CollapsibleItem header='Power Consumption' icon='power_settings_new'>
                        		Power Consumption today is: 1900kj
                        	</CollapsibleItem>
                        	<CollapsibleItem header='Cycles Today' icon='motorcycle'>
                        		Number of Cycles today: 19
                        	</CollapsibleItem>
                        	<CollapsibleItem header='Money' icon='attach_money'>
                        		Money made by machine is: $39
                        	</CollapsibleItem>
                        </Collapsible>}>
                <p><a href="#">Click here for past machine perfomance</a></p>

            </Card>
          </Col>
          <Col className="col l3 m6 s12">
            <Card className="dryer-wash" header={<CardTitle reveal image={require('../images/washingmachine.jpg')} waves='light'/>}
                title={<h4>Washer06</h4>}
                reveal={<p className="text">Power consumption is currently at 1990kj <br/>
                Size is Single, Number of cycles per day is 10</p>}>
                <p><a href="#">Click here for past machine perfomance</a></p>

            </Card>
          </Col>
          <Col className="col l3 m6 s12">
            <Card className="dryer-wash" header={<CardTitle reveal image={require('../images/washingmachine.jpg')} waves='light'/>}
                title={<h4>Washer07</h4>}
                reveal={<p className="text">Power consumption is currently at 1990kj <br/>
                Size is Single, Number of cycles per day is 10</p>}>
                <p><a href="#">Click here for past machine perfomance</a></p>

            </Card>
          </Col>
          <Col className="col l3 m6 s12">
            <Card className="dryer-wash" header={<CardTitle reveal image={require('../images/washingmachine.jpg')} waves='light'/>}
                title={<h4>Washer08</h4>}
                reveal={<p className="text">Power consumption is currently at 1990kj <br/>
                Size is Single, Number of cycles per day is 10</p>}>
                <p><a href="#">Click here for past machine perfomance</a></p>

            </Card>
          </Col>
          <Col className="col l3 m6 s12">
            <Card header={<CardTitle reveal image={require('../images/dryer.jpg')} waves='light'/>}
                title={<h4>Dryer01</h4>}
                reveal={<p className="text">Power consumption is currently at 990kj <br/>
                Size is Single, Number of cycles per day is 20</p>}>
                <p><a href="#">Click here for past machine perfomance</a></p>
            </Card>
          </Col>
          <Col className="col l3 m6 s12">
            <Card className="dryer-wash" header={<CardTitle reveal image={require('../images/dryer.jpg')} waves='light'/>}
                title={<h4>Dryer02</h4>}
                reveal={<p className="text">Power consumption is currently at 1390kj <br/>
                Size is Single, Number of cycles per day is 30</p>}>
                <p><a href="#">Click here for past machine perfomance</a></p>

            </Card>
          </Col>
          <Col className="col l3 m6 s12">
            <Card className="dryer-wash" header={<CardTitle reveal image={require('../images/dryer.jpg')} waves='light'/>}
                title={<h4>Dryer03</h4>}
                reveal={<p className="text">Power consumption is currently at 1990kj <br/>
                Size is Single, Number of cycles per day is 10</p>}>
                <p><a href="#">Click here for past machine perfomance</a></p>

            </Card>
          </Col>
          <Col className="col l3 m6 s12">
            <Card className="dryer-wash" header={<CardTitle reveal image={require('../images/dryer.jpg')} waves='light'/>}
                title={<h4>Dryer04</h4>}
                reveal={<p className="text">Power consumption is currently at 1990kj <br/>
                Size is Single, Number of cycles per day is 10</p>}>
                <p><a href="#">Click here for past machine perfomance</a></p>

            </Card>
          </Col>
        </Row>
      </div>
    );
  };
};


export default WerryWashers;
