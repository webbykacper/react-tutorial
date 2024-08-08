import React from "react";

export default function List( {items} ) {
    return (
        <ul>
        { items.map(item => {
            return <li key = {item.id}> {item.name} {item.surname} </li>
        })}
        </ul>
    )
}