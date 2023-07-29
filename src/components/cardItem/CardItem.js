import { Component } from 'react'

import CardText from '../cardText/CardText'

import '../../styled/style.css'
import '../../styled/font.css'

	
class CardItem extends Component {
	
	state = {
		data: [],
		maxId: 0
	}

	addCardText = () => {

		const name = prompt('Введите название карточки', '')
		const { data, maxId} = this.state

		const newCardText = [{
			cardId: 0, // тут потом нужно будет как-то поменять, так как будут ведь еще и другие карточки, а у них это значение должно быть другое
			textId: maxId + 1,
			name: name
		}]

		this.setState(() => ({
			data: [...data, ...newCardText],
			maxId: maxId + 1
		}))
	}


	// deleteCardText = (e) => {

	// 	// const confirm = window.confirm('Вы уверены, что хотите удалить эту карточку?')

	// 	const { data } = this.state

	// 	// const id = e.currentTarget.parentNode.parentNode.parentNode.parentNode
	// 	const id = data.cardId

	// 	console.log(id)

	// 	// if (confirm) {
	// 	// 	this.setState(({ data }) => {
	// 	// 		return {
	// 	// 			data: data.filter(item => item.cardId !== data.cardId)
	// 	// 		}
	// 	// 	})
	// 	// }

		

	// }

	// dDeleteCard = (cardId) => {

	// 	const confirm = window.confirm('Вы уверены, что хотите удалить эту карточку?')

	// 	// const { data } = this.state

	// 	// const id = e.currentTarget.parentNode.parentNode.parentNode.parentNode
	// 	// const id = data.cardId

	// 	console.log(cardId)

	// 	if (confirm) {
	// 		this.setState(({ data }) => {
	// 			return {
	// 				data: data.filter(item => item.cardId !== cardId)
	// 			}
	// 		})
	// 	}

		

	// }


	render() {

		const { cardName, onDeleteCard} = this.props
	
		const { data } = this.state
		
		const element = data.map(item => {

			const {name, textId} = item

			return (
				<CardText name={name} key = {textId} />
			)
		})

		return (
			<div className="card__item" key = {data.cardId}>
				<div className="card__title">
					<div className="card__name">{cardName}</div>
					<div className="card__option">
						<div className="card__option-addthis" >
							<span
								className="icon-addthis"
								onClick={this.addCardText}
							></span>
						</div>
						<div className="card__option-pencil">
							<span
								className="icon-pencil"
							></span>
						</div>
						<div className="card__option-bin">
							<span
								className="icon-bin"
								onClick={onDeleteCard}
							>
							</span>
						</div>
					</div>
				</div>
				<div className="card__content">
					{element}
				</div>
			</div>
		)
	}
}


export default CardItem