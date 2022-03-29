import React, { useState } from 'react'
import questions from './data'
import './App.css';
import Question from './Question';

function App() {
  //get data and store it in state
  //eslint-disable-next-line
  const [data, setData] = useState(questions);


  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {data.map(({ id, title, info }) => {
            return (<Question key={id} id={id} title={title} info={info} />)
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
