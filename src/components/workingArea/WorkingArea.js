import { Component } from 'react'
import CardItem from '../cardItem/CardItem'

import '../../styled/style.css'
import '../../styled/font.css'


class WorkingArea extends Component {

	state = {
		dataCard: [],
		maxCardId: 0,
		
	}

		// после обновления страницы проверяем ls и делаем maxCardID равным числу карточек, чтобы не сбилась нумерация key
	componentDidMount() {
		this.checkLocalStorage()

	}

		// после обновления (перерерисовке) компонентов данные из массива карточек сохраняются в ls
	componentDidUpdate() {
		this.saveToLocalStorage()
	}

		// если в lS есть какие-то данные, то мы их от туда получим и запишем в наш массив
	checkLocalStorage = () => {
		if (localStorage.getItem('dataCard')) {
			this.setState(() => ({
				dataCard: JSON.parse(localStorage.getItem('dataCard')),
				maxCardId: JSON.parse(localStorage.getItem('maxCardId'))
			}))
		}
	}


	saveToLocalStorage = () => {
		localStorage.setItem('dataCard', JSON.stringify(this.state.dataCard))
		localStorage.setItem('maxCardId', JSON.stringify(this.state.maxCardId))
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

	deleteCard = (cardId, dataCard) => {

		const confirm = window.confirm('Вы уверены, что хотите удалить эту карточку?')

		if (confirm) {
			this.setState(() => {
				return {
					dataCard: dataCard.filter(item => item.cardId !== cardId)
				}
			})
		}

	}

	renameCard = (cardId, dataCard) => {

		const newCardName = prompt('Введите новое название карточки', '')

		this.setState(() => {
			return {
				dataCard: dataCard.map(item => { 

					if (item.cardId === cardId) {
						return { ...item, cardName: newCardName }
					} else {
						return {...item}
					}
				})
			}
		})

	}


	render() {

		const {dataCard} = this.state

		const element = dataCard.map((item) => {

			const { cardName, cardId } = item
			
			return (
				<CardItem
					cardName={cardName}
					key={cardId}
					onDeleteCard={() => this.deleteCard(cardId, dataCard)}
					onRenameCard = {() => this.renameCard(cardId, dataCard)}
				/>
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