import React from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
export default function Question({ id, title, info }) {
    return (
        <article key={id} className="question">
            <header>
                <h4>{title}</h4>
                <button>
                    <AiFillPlusCircle />
                </button>
            </header>
            <p>{info}</p>
        </article>
    )
}
