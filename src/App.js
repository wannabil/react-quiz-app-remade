import logo from './logo.svg';
import './App.css';
import { listOfQuestion } from './Quiz.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>You will build a simple React quiz app where users can click on option buttons to answer questions,
           next question rendered each time option is selected and at the end, the final score is displayed.</p>
        <QuizApp />
    </div>
  );
}

export default App;



export default function QuizApp() {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [totalPoint, settotalPoint] = useState(0);
  const [finalResult, setfinalResult] = useState(false);
  

  function handleNextClick() {
    setindex(index + 1);
  }

  let quiz = currentQuestion[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {currentQuestion.length})
      </h3>
    </>
  );
}
