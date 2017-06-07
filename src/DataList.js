import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, CardTitle, Row, CollapsibleItem, Collapsible} from 'react-materialize';

const DataList = (props) => {
  return (
    <div>
      <Row>

         {props.Data.map((data,i) =>
              <Col className="col l3 m6 s12">
                <Card header={<CardTitle reveal image={require('./images/washingmachine.jpg')} waves='light'/>}
                    title={data.name}
                    reveal={<Collapsible popout>
                              <CollapsibleItem header='Power Consumption' icon='power_settings_new'>
                                Power Consumption today is: 1900kj
                              </CollapsibleItem>
                              <CollapsibleItem header='Cycles Today' icon='motorcycle'>
                                Number of Cycles today: {data.cycles}
                              </CollapsibleItem>
                              <CollapsibleItem header='Money' icon='attach_money'>
                                Money made by machine is: $39
                              </CollapsibleItem>
                            </Collapsible>}>
                    <p><a href="#">Cycles per day is {data.cycles}</a></p>
                </Card>
              </Col>
          )}

      </Row>
    </div>
  )

};

DataList.propTypes = {
  Data: PropTypes.array.isRequired
};

export default DataList;
