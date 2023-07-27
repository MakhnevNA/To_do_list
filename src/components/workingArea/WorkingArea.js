import { Component } from 'react'
import CardItem from '../cardItem/CardItem'

import '../../styled/style.css'
import '../../styled/font.css'


class WorkingArea extends Component {

	state = {
		dataCard: [],
		maxCardId: 0
	}

	onAddItem = () => {
		const cardName = prompt('Введите название карточки', '');

		const {dataCard, maxCardId} = this.state

		const newCard = [{
			cardId: maxCardId + 1,
			cardName: cardName
		}]

		this.setState(() => ({
			dataCard: [...dataCard, ...newCard],
			maxCardId: maxCardId + 1
		}))
	}

	render() {

		const {dataCard} = this.state

		const element = dataCard.map((item) => {
			return (
				<CardItem cardName={item.cardName} key={item.cardId} />
			)
		})

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
							{element}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default WorkingArea