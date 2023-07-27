import { Component } from 'react'

import CardText from '../cardText/CardText'

import '../../styled/style.css'
import '../../styled/font.css'

	
class CardItem extends Component {
	
	state = {
		data: [
			{cardId: 0, textId: 0, name: "Nikita"},
		],
		maxId: 0
		


	}

	addCardText = () => {

		const name = prompt('Введите название карточки', '')
		const { data, maxId} = this.state

		const newCardText = [{
			cardId: 0,
			textId: maxId + 1,
			name: name
		}]

		this.setState(() => ({
			data: [...data, ...newCardText],
			maxId: maxId + 1
		}))
	}


	render() {

		const { cardName } = this.props
	
		const { data } = this.state
		
		const element = data.map(item => {
			return (
				<CardText name={item.name} key = {item.textId} />
			)
		})

		return (
			<>
				<div className="card__item" key = {data.cardId}>
					<div className="card__title">
						<div className="card__name">{cardName}</div>
						<div className="card__option">
							<div className="card__option-addthis"><span className="icon-addthis" onClick ={this.addCardText}></span></div>
							<div className="card__option-pencil"><span className="icon-pencil"></span></div>
							<div className="card__option-bin"><span className="icon-bin"></span></div>
						</div>
					</div>
					<div className="card__content">
						{element}
					</div>
				</div>
			</>
		)
	}
	
}


export default CardItem