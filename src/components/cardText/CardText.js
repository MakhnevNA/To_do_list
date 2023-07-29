import { Component } from 'react';

import '../../styled/style.css'
import '../../styled/font.css'



class CardText extends Component {


	// state = {
	// 	cardText: null
	// }
	

	// onRenameCardText = () => {
	// 	const cardText = prompt("Введите новое название пункта", '')
	// 	this.setState({
	// 		cardText: cardText
	// 	})
	// }


	render() {


		const {onDeleteCardText}= this.props
		return (
			<div className="card__text" key ={this.props.id}>
				<p>{this.props.name}</p>
				<div className="card__text-active">
					<div className="card__text-pencil">
						<span
							className="icon-pencil"
							onClick={this.onRenameCardText}
						></span>
					</div>
					<div className="card__text-bin" onClick ={onDeleteCardText}><span className="icon-bin"></span></div>
				</div>
			</div>
		)
	}
}

export default CardText