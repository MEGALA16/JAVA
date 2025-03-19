import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    // Fetch quizzes from the backend
    axios
      .get("http://localhost:5000/api/quizzes")
      .then((response) => setQuizzes(response.data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);

  const handleSubmit = () => {
    // Form validation
    if (
      !question.trim() ||
      options.some((option) => !option.trim()) ||
      !answer.trim()
    ) {
      alert("All fields are required!");
      return;
    }

    // Post new quiz to the backend
    axios
      .post("http://localhost:5000/api/quizzes", { question, options, answer })
      .then((response) => {
        setQuizzes([...quizzes, response.data]);
        setQuestion("");
        setOptions(["", "", "", ""]);
        setAnswer("");
      })
      .catch((error) => console.error("Error adding quiz:", error));
  };

  return (
    <>
      <header>
        <h1>Quiz App</h1>
      </header>
      <main>
        <section aria-labelledby="create-quiz-section">
          <h2 id="create-quiz-section">Create a Quiz</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <label>
              Question:
              <input
                type="text"
                placeholder="Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </label>
            {options.map((option, index) => (
              <label key={index}>
                Option {index + 1}:
                <input
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    setOptions(newOptions);
                  }}
                />
              </label>
            ))}
            <label>
              Answer:
              <input
                type="text"
                placeholder="Answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </label>
            <button type="submit">Add Quiz</button>
          </form>
        </section>
        <section aria-labelledby="quiz-list-section">
          <h2 id="quiz-list-section">Quiz List</h2>
          <ul>
            {quizzes.map((quiz, index) => (
              <li key={index}>
                <article>
                  <h3>{quiz.question}</h3>
                  <ul>
                    {quiz.options.map((option, i) => (
                      <li key={i}>{option}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;









