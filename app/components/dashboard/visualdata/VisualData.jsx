import React, { createClass, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const VisualData = createClass({
  displayName: 'VisualData',
  render() {


    const data = [
      {name: 'Interested', Current: this.props.currentStatuses.INTERESTED, Goal: 20},
      {name: 'Applied', Current: this.props.currentStatuses.APPLIED, Goal: 20},
      {name: 'Info', Current: this.props.currentStatuses['INFO INTERVIEW'], Goal: 20},
      {name: 'Interview', Current: this.props.currentStatuses.INTERVIEW, Goal: 20},
      {name: 'Job Offer', Current: this.props.currentStatuses['JOB OFFER'], Goal: 20},
    ];

    console.log('props in visual data', this.props);
    return (

        <ResponsiveContainer width="95%" height="100%">
          <BarChart width={450} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="5 4" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Current" fill="#8884d8" />
            <Bar dataKey="Goal" fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>

    );
  }
});

export default VisualData;

