import React, { useState } from "react";
import { questions } from "./question";

type QuestionProps = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: QuestionProps) => {
  const [isHidden, toggleHidden] = useState(true);
  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className={`${isHidden ? "blurred" : ""} `}>{answer}</span>
      </p>
      <footer>
        <button onClick={() => toggleHidden(!isHidden)}>Toggle Answer</button>
      </footer>
    </article>
  );
};

function App() {
  return (
    <main>
      {questions.map(({ id, question, answer }) => (
        <Question question={question} answer={answer} key={id} />
      ))}
      ;
    </main>
  );
}

export default App;
