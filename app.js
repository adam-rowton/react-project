import React from "react"
import Card from "./components/card.js"
import Nav from "./components/navbar.js"
import data from"./data.js"

export default function App() {
const cards = data.map(item => {
    return (<Card 
            key={item.title}
            item={item}
            />
    )
})
    return (
        <div>
            <Nav />
            <div className="cardContainer">
            {cards}
            </div>
        </div>
    )
}