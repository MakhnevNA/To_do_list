import { Component } from 'react'
import CardItem from '../cardItem/CardItem'

import '../../styled/style.css'
import '../../styled/font.css'


class WorkingArea extends Component {

	state = {
		cardName: null
	}

	onAddItem = () => {
		const cardName = prompt('Введите название карточки', '')

		this.setState({
			cardName: cardName
		})

		// при клике на большой плюс мне надо менять стейет (количества карточек) в cardItem

	}

	render() {


		return (
			<div className="wrapper">
				<div className="global__option-addthis">
					<span
						className="icon-addthis"
						onClick={this.onAddItem}></span>
				</div>
				<div className="container">
					<div className="card">
						<div className="card__row">
							<CardItem cardName={this.state.cardName} />
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default WorkingArea