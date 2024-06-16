import React from 'react'
import '../css/MainStyle.min.css'

export default function MainComponent() {
	return (
		<>
			<div className="header">
				<div className="header_link">
					<a href="#Map">Заведения</a>
				</div>
				<div className="header_link">
					<a href="#Lepka">Рецепты</a>
				</div>
				<div className="header_link">
					<a href="#Article">Статьи</a>
				</div>
			</div>
			<div className="MainBG">
				<p>
					К ежедневным посиделкам за столом. <br />
					Празднование вечной традиции и ритуала.
				</p>
				<button>Подробнее</button>
			</div>
		</>
	)
}
