import React from 'react'
import "../css/KurzeStyle.min.css"
import KurzeHistory from "../../img/kurzeHistory.jpg"
import KurzeLepka from "../../img/kurzeLepka.jpg"
import Map from "./MapKurzeComponent"

export default function KurzeComponent() {
  return (
    <>
      <div className="kurze">
            <div className={`${"kurze_text"} ${"kurzeHistory"}`}>
                <p>История происхождения курзе</p>
                <p>
                    Название блюда «курзе» неспроста созвучно со словом «гюрза» — змея. Искусная лепка 
                    этих изделий напоминает то, как ползет змея, отсюда и название. По преданию, 
                    мастерство лепки курзе дагестанцы переняли у китайцев, которые хранили секрет 
                    приготовления своих блюд в тайне, но одна смелая девушка сумела выведать секрет 
                    изготовления. Однако, она немного изменила форму изделий, чтобы китайцы ни о чем не 
                    догадались. 
                    <br /><br />
                    С тех пор курзе — неотъемлемая часть кухни Дагестана. Мастерство 
                    формовки курзе ценится у дагестанских хозяек. Так проверяют невест и девушек на 
                    выданье — если хорошо лепят косичку, значит, годятся в жены.
                </p>
            </div>
            <div className="kurze_img">
              <img src={KurzeHistory} alt="" />
            </div>
        </div>
        <div className={`${"kurze"} ${"Lepka"}`} id="Lepka">
            <div className={`${"kurze_img"} ${"kurzeLepkaImg"}`}>
              <img src={KurzeLepka} alt="" />
            </div>
            <div className={`${"kurze_text"} ${"kurzeLepka"}`}>
                <p>Как лепить курзе</p>
                <p>
                Замешиваем крутое тесто- в просеянную муку отправляем одно куриное яйцо, 
                холодную воду и соль.Замешиваем тесто сначала ложкой, потом руками минут 10.
                <br /><br />
                Как только тесто обретет однородную консистенцию, перекладываем его в пакет и 
                убираем на один час в холодильник.
                <br /><br />
                Мясо и репчатый лук пропускаем через мясорубку. Солим, перчим фарш, добавляем паприку в хлопьях и тмин. Мелко нашинкованные помидоры и зелень также отправляем в фарш. Вымешиваем.
                <br /><br />
                Тесто раскатываем толщиной в один миллиметр. Формой или раскаточным роликом 
                вырезаем кружки диаметром 7-8 мм.
                <br /><br />
                Накладываем фарш в тесто, чтобы при заворачивании в Курзе не оставалось пустот. Шов 
                должен получиться плетеным.
                <br /><br />
                Кипящую воду солим и опускаем в нее Курзе. После того, как Курзе всплыли, варим их 
                еще 3-4 минуты.
                </p>
            </div>
        </div>
        <div id="Map">
          <Map/>
        </div>
    </>
  )
}
