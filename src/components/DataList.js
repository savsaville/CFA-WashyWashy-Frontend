import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, CardTitle, Row, CollapsibleItem, Collapsible, Modal} from 'react-materialize';
import { LineChart, Line, AreaChart, Area, Brush, XAxis, YAxis, CartesianGrid, Tooltip, ComposedChart, Legend, Bar } from 'recharts';

const graph = [
      {name: '01/07/17', Cycles: 39, PowerConsumption: 1999},
      {name: '02/07/17', Cycles: 28, PowerConsumption: 1800},
      {name: '03/07/17', Cycles: 20, PowerConsumption: 1800},
      {name: '04/07/17', Cycles: 28, PowerConsumption: 2000},
      {name: '05/07/17', Cycles: 19, PowerConsumption: 1900},
      {name: '06/07/17', Cycles: 23, PowerConsumption: 2190},
      {name: '07/07/17', Cycles: 40, PowerConsumption: 1980},
      {name: '01/07/17', Cycles: 37, PowerConsumption: 2222},
      {name: '02/07/17', Cycles: 12, PowerConsumption: 2100},
      {name: '03/07/17', Cycles: 22, PowerConsumption: 1998},
      {name: '04/07/17', Cycles: 20, PowerConsumption: 2101},
      {name: '05/07/17', Cycles: 30, PowerConsumption: 2010},
      {name: '06/07/17', Cycles: 31, PowerConsumption: 2120},
      {name: '07/07/17', Cycles: 31, PowerConsumption: 1900},
    ];

const DataList = (props) => {
  return (
    <div>
      <Row>
         {props.Data.map((data,i) =>
              <Col className="col l3 m6 s12">
                <Card header={<CardTitle reveal image={require('../images/washingmachine.jpg')} waves='light'/>}
                    title={data.machineName}
                    reveal={<Collapsible popout>
                              <CollapsibleItem header='Power Consumption' icon='power_settings_new'>
                                Power Consumption today is: {data.powerConsumption}
                              </CollapsibleItem>
                              <CollapsibleItem header='Cycles Today' icon='motorcycle'>
                                Number of Cycles today: {data.cycles}
                              </CollapsibleItem>
                              <CollapsibleItem header='Money' icon='attach_money'>
                                Money made by machine is: $39
                              </CollapsibleItem>
                              <CollapsibleItem header='Size' icon='text_fields'><Modal
                                trigger={<p>Click here to see past Analysis</p>}>
                                <h5>Cycles of Machine per Day</h5>
                                  <LineChart width={600} height={200} data={graph} syncId="anyId"
                                        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Tooltip/>
                                    <Line type='monotone' dataKey='Cycles' stroke='#8884d8' fill='#8884d8' />
                                  </LineChart>
                                  <h5>Power Consumption of Machines Per Day</h5>
                                  <LineChart width={600} height={200} data={graph} syncId="anyId"
                                        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Tooltip/>
                                    <Line type='monotone' dataKey='PowerConsumption' stroke='#8884d8' fill='#8884d8' />
                                    <Brush />
                                  </LineChart>
                            </Modal>
                                </CollapsibleItem>

                            </Collapsible>}>
                    <p><a href="#">Data valid for {data.createdAt} at {data.location} Laundromat</a></p>
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
