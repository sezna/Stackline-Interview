import React from 'react';
import './chartTable.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const ChartTable = ({sales}) => <div className="chart-table">
	<ReactTable 
		data={sales} 
		pageSize={20}
		columns={[{
				Header: 'Week Ending',
				accessor: 'weekEnding',
				
		}, {
				Header: 'Retail Sales',
				accessor: 'retailSales',
				Cell: val => new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD' }).format(parseInt(val.value)) 
		}, {
				Header: 'Wholesale Sales',
				accessor: 'wholesaleSales',
				Cell: val => new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD' }).format(parseInt(val.value)) 
		}, {
				Header: 'Units Sold',
				accessor: 'unitsSold'
		}, {
				Header: 'Retailer Margin',
				accessor: 'retailerMargin',
				Cell: val => new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD' }).format(parseInt(val.value)) 
		}]}
	/>
</div>

export default ChartTable;
