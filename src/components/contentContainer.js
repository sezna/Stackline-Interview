import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Chart from './chart';
import ChartTable from './chartTable';
import LeftNav from './leftNav';
import './contentContainer.css';

class ContentContainer extends React.Component {
		static propTypes = {
			image: PropTypes.string,
			title: PropTypes.string,
			tags: PropTypes.array,
			subtitle: PropTypes.string,
			sales: PropTypes.array,
		}

		render() {
			let {
				sales,
				...productInfo
			} = this.props;
			return (
					<div className="content-container">
						<LeftNav {...productInfo} />
						<div className="chart-and-table-container">
							<Chart sales={this.props.sales}/>
							<ChartTable sales={this.props.sales} />
						</div>
					</div>
					);
		}
}

const mapStateToProps = state => {
		console.log("the state is ", state);
		return ({
				image: state.data[0].image,
				title: state.data[0].title,
				tags: state.data[0].tags,
				subtitle: state.data[0].subtitle,
				sales: state.data[0].sales
		});
}
	  	

export default connect(mapStateToProps)(ContentContainer);
