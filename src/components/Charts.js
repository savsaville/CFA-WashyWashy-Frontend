import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Col, Card, CardTitle, Row, CollapsibleItem, Collapsible} from 'react-materialize';

const data = [
      {name: '01/07/17', uv: 12, pv: 20, amt: 24},
      {name: '02/07/17', uv: 15, pv: 19, amt: 22},
      {name: '03/07/17', uv: 19, pv: 49, amt: 22},
      {name: '04/07/17', uv: 23, pv: 10, amt: 20},
      {name: '05/07/17', uv: 10, pv: 30, amt: 21},
      {name: '06/07/17', uv: 12, pv: 11, amt: 25},
      {name: '07/07/17', uv: 13, pv: 19, amt: 21},
    ];



const Charts = (props) => {
  return (
    <div>
      <Row>
        <Col className="col l3 m6 s12">
          <Card header={<CardTitle reveal image={require('../images/washingmachine.jpg')} waves='light'/>}
              title={<h4>Washer01</h4>}
              reveal={<ComposedChart width={400} height={250} data={data}
                    margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                  <XAxis dataKey="name"/>
                  <YAxis />
                  <Tooltip/>
                  <Legend/>
                  <CartesianGrid stroke='#f5f5f5'/>
                  <Bar dataKey='pv' barSize={20} fill='#413ea0'/>
                  <br/>
                  <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
               </ComposedChart>}>
              <p><a href="#">Click here for past machine perfomance</a></p>
          </Card>
        </Col>
      </Row>


    </div>
  )

};

export default Charts;
