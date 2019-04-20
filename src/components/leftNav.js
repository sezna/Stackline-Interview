import React from 'react';
import './leftNav.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartBar } from '@fortawesome/free-solid-svg-icons'

class LeftNav extends React.Component {
	render() {
		library.add(faHome, faChartBar);
		let {
			image,
			title,
			tags,
			subtitle
		} = this.props;
		return <div className="left-nav">
					<div className="top-info">
						<img className="product-image" src={image} alt={"picture of" + title} />
						<div className="product-title">{title}</div>
						<div className="product-subtitle">{subtitle}</div>
					</div>
					<div className="tags">
						{tags.map((tag, ind) => <div className="tag" key={ind}>{tag}</div>)}
					</div>
					<div className="nav-options">
							<div className="nav-option"><FontAwesomeIcon icon="home" /> OVERVIEW </div>
							<div className="nav-option"><FontAwesomeIcon icon="chart-bar" /> SALES</div>
					</div>
					<div className="extra-space" />

			
		</div>
	}
}

export default LeftNav;
