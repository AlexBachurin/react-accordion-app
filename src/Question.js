import React from 'react'

export default function Question({ id, title, info }) {
    return (
        <article key={id} className="question">
            <header>
                <h4>{title}</h4>
                <button></button>
            </header>
        </article>
    )
}
