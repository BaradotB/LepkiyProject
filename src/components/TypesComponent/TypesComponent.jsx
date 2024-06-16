import React from 'react'
import "../css/TypesStyle.min.css"
import  { Link } from 'react-router-dom'

export default function TypesComponent() {
  return (
    <>
        <div className="typesBG">
            <p>Различные виды изделий из теста</p>
            <div className="types">
              <Link to={`/pelmeni`} className="pasteType"></Link>
              <Link to={`/hinkali`} className="pasteType"></Link>
              <Link to={`/vareniki`} className="pasteType"></Link>
              <Link to={`/kurze`} className="pasteType"></Link>
            </div>
        </div>
    </>
  )
}
