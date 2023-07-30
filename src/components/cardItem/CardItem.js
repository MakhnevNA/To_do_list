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


	deleteCardText = (textId, data) => {

		const confirm = window.confirm('Вы уверены, что хотите удалить этот пункт?')

		// const { data } = this.state

		console.log(textId)

		if (confirm) {
			this.setState(() => {
				return {
					data: data.filter(item => item.textId !== textId)
				}
			})
		}

		

	}


	renameCardText = (textId, data) => {

		const newCardTextName = prompt('Введите новое название карточки', '')

		this.setState(() => {
			return {
				data: data.map(item => { 

					if (item.textId === textId) {
						return { ...item, name: newCardTextName }
					} else {
						return {...item}
					}
				})
			}
		})

	}


	render() {

		const { cardName, onDeleteCard, onRenameCard} = this.props
	
		const { data } = this.state
		
		const element = data.map(item => {

			const {name, textId} = item

			return (
				<CardText
					name={name}
					key={textId}
					onDeleteCardText={() => this.deleteCardText(textId, data)}
					onRenameCardText={() => this.renameCardText(textId, data)} />
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
								onClick={onRenameCard}
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