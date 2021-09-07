import React, { useState } from 'react'
import data from './data'
import './App.css';
import Question from './Question';

function App() {
  //get data and store it in state
  const [questions, setQuestions] = useState(data);


  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.forEach(({ id, title, info }) => {
            return <Question id={id} title={title} info={info} />
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
