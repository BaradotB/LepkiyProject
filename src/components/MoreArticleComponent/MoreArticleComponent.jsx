import React from 'react'
import "../css/MoreArticleStyle.min.css"

export default function MoreArticleComponent() {
  return (
    <div className='articles'  id="Article">
        <p>Больше статей</p>
        <a href="https://lifehacker.ru/kakie-byvayut-pelmeni/" target="_blank">
            <div className="articles_one">
                <div className="articles_one_img"></div>
                <div className="articles_one_text">36 видов пельменей</div>
            </div>
        </a>
        <a href="https://www.russianfood.com/recipes/bytype/?fid=64" target="_blank">
            <div className="articles_one">
                <div className={`${"articles_one_img"} ${"secondArticle"}`}></div>
                <div className="articles_one_text">Различные рецепты пельменей</div>
            </div>
        </a>
    </div>
  )
}
