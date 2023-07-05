import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import HtmlQuiz from './components/HtmlQuiz';
import CssQuiz from './components/CssQuiz';
import topicList from './components/TopicData';
import JsQuiz from './components/JsQuiz';

function Home() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleBackToHome = () => {
    setSelectedTopic(null);
  };

  const handleTopic = (topic) => {
    setSelectedTopic(topic);
  };

  const renderSingleQuiz = () => {
    if (selectedTopic === 'HTML') {
      return <HtmlQuiz handleBackToHome={handleBackToHome} />;
    }
    if (selectedTopic === 'CSS') {
      return <CssQuiz handleBackToHome={handleBackToHome} />;
    }
    if (selectedTopic === 'JS') {
      return <JsQuiz handleBackToHome={handleBackToHome} />;
    }
    return null;
  };

  return (
    <>
      {selectedTopic ? (
        renderSingleQuiz()
      ) : (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-2">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-600">Coding Quiz Challenges</h1>
            </div>

            {/* Mapping the Topic list */}
            <div className="flex flex-col justify-center items-center mt-3">
              {topicList.map((item) => {
                return (
                  <div className="flex items-center justify-between max-w-md w-full border border-slate-200 p-4 m-3 rounded-md hover:bg-blue-100" key={item.id}>
                    <div className="flex">
                      <img src={item.topicImg} className="w-8" alt="" />
                      <h3 className="tracking-wider text-lg ml-2 pt-1 font-semibold text-gray-600">{item.title}</h3>
                    </div>
                    <Link to={`/quiz/${item.topic}`} className="bg-blue-400 px-3 py-1 ml-4 text-white rounded border border-blue-400 hover:bg-transparent hover:text-blue-400">
                      Start
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      <footer>
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-500 w-full text-center">
          - Source Code <a href="https://github.com/farhaanmalik/quizapp" className="text-blue-400">GitHub</a> -
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:topic" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

function Quiz() {
  const { topic } = useParams();
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  const renderQuiz = () => {
    if (topic === 'HTML') {
      return <HtmlQuiz handleBackToHome={handleBackToHome} />;
    }
    if (topic === 'CSS') {
      return <CssQuiz handleBackToHome={handleBackToHome} />;
    }
    if (topic === 'JS') {
      return <JsQuiz handleBackToHome={handleBackToHome} />;
    }
    return null;
  };

  return (
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full max-w-2xl px-4">
      <div className="bg-slate-100 shadow-md rounded-lg mt-4">
        {renderQuiz()}
      </div>
    </div>
  );
}

export default App;
