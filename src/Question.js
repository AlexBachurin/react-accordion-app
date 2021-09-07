import React, { useState } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
export default function Question({ id, title, info }) {
    //value for checking if we clicked on plus to show more info, default is true meaning we are not clicked on it
    const [isCollapsed, setIsCollapsed] = useState(true);

    //click handler
    const handleShowMore = () => {
        //simply put our isCollapsed value in reverse state so if it was true, it will be false now
        setIsCollapsed(!isCollapsed);
    }
    return (
        <article key={id} className="question">
            <header>
                <h4>{title}</h4>
                <button onClick={handleShowMore} className="btn">
                    {/* we checking our state value , if we clicked on it, then it false, so we show minus component, if not, we show plus */}
                    {isCollapsed ? <AiFillPlusCircle /> : <AiFillMinusCircle />}
                </button>
            </header>
            {/* we show info only if our isCollapsed value stays in false */}
            <p>{isCollapsed || info}</p>
        </article>
    )
}
