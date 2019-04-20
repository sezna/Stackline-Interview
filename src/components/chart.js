import React from 'react';
import './chart.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

const Chart = ({sales}) =>  <div className="chart">
	<div className="chart-title">Retail Sales</div>
	<ResponsiveContainer height={500} width="95%">
			<LineChart
				data={sales}
			>
				<Line type="monotone" dataKey="retailSales" stroke="#4BA9F3" strokeWidth={5} dot={false}/>
				<Line type="monotone" dataKey="retailerMargin" stroke="#C1C1C1" strokeWidth={5} dot={false}/>
				<XAxis hide={true} dataKey="month" />
				<YAxis domain={[-900000,2000000]} hide={true}/>
				<Tooltip formatter={
					(value, name) => [
									 Intl.NumberFormat('en-US',
									 	{
											style: 'currency',
									   		currency: 'USD' 
									    }).format(value),
				   					 name === "retailSales" ? "Retail Sales" : "Retailer Margin"
									 ]		
				}/>
			</LineChart>
	</ResponsiveContainer>
{/* This library doesn't support month indexing like in the picture,
	so I've had to hard code it */}
	<div className="months">
		<div>Jan</div>
		<div>Feb</div>
		<div>Mar</div>
		<div>Apr</div>
		<div>May</div>
		<div>Jun</div>
		<div>Jul</div>
		<div>Jug</div>
		<div>Sep</div>
		<div>Oct</div>
		<div>Nov</div>
		<div>Dec</div>
	</div>
</div>

export default Chart;
