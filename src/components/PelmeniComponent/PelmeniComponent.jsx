import React from 'react'
import "../css/PelmeniStyle.min.css"
import PelmeniHistory from "../../img/PelmeniHistory.jpg"
import PelmeniLepka from "../../img/PelmeniLepka.jpg"
import Map from './MapPelmeniComponent'

export default function PelmeniComponents() {
  return (
    <>
        <div className="pelmeni">
            <div className={`${"pelmeni_text"} ${"pelmeniHistory"}`}>
              <p>История происхождения пельменей на Руси</p>
              <p>
                Считается, что именно китайский вариант и попал в русскую Сибирь и на Урал примерно в 15 веке. Кто именно облагодетельствовал жителей этого края таким блюдом точно неизвестно. Одни исследователи считают, что это был народ коми, другие называют татар. 
                <br /><br />
                Так это или нет, но пельмени идеально подходят к условиям сибирского климата: при тамошних морозах пельмени можно было хранить всю зиму, брать с собой в походы и т.д. <br /><br />
                Долгое время пельмени были традиционным блюдом именно жителей Сибири и Урала. Там пельмени были главным и основным блюдом праздничного стола. Хотя в других частях России тоже делали подобные «пирожки» с мясной начинкой, только назывались они по-другому: ушки, шурубарки и т.д. Форма, размеры и начинка тоже отличались в разных регионах.
              </p>
            </div>
            <div className="pelmeni_img">
              <img src={PelmeniHistory} alt="" />
            </div>
        </div>
        <div className={`${"pelmeni"} ${"Lepka"}`} id="Lepka">
            <div className={`${"pelmeni_img"} ${"pelmeniLepkaImg"}`}>
              <img src={PelmeniLepka} alt="" />
            </div>
            <div className={`${"pelmeni_text"} ${"pelmeniLepka"}`}>
              <p>Как лепить настоящие пельмени</p>
              <p>
                Чтобы получить «правильные» пельмени, напоминающие формой ухо, придется потрудиться.
                Самый верный, но трудоемкий способ лепки пельменей заключается в следующем: раскатывать маленькие кусочки теста для каждого пельменя в отдельности.
                Если вы любите точность и порядок, можно приготовить пельмени по-другому. Из тонко раскатанного теста рюмочкой или стаканом вырезают одинаковые кружочки, в центр которых кладется мясная начинка. Обрезки пельменного теста можно использовать для домашней лапши.
                Также из теста можно скатать несколько колбасок, разрезать их на кусочки, раскатать и вылепить пельмени.
                <br /><br />
                Чтобы изготовить пельмени классической формы, тесту с фаршем надо придать форму полумесяца, концы которого соединить.
                Пельмени – блюдо, которое способно подчеркнуть индивидуальность хозяйки. В каждой семье свои традиции, свои пельмени, знакомые и особенные одновременно. Главное – готовить в хорошем настроении.
              </p>
            </div>
        </div>
        <div id="Map">
          <Map/>
        </div>
    </>
  )
}
