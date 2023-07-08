import { useState } from "react"
import checked from '../assets/checked.png'
import cross from '../assets/cross.png'
import '../css/file.css';
import farm from '../images/body/farm.png'
import foot from '../images/body/foot.png'
import hand from '../images/body/hand.png'
import head from '../images/body/head.png'
import uarm from '../images/body/uarm.png'
import leg from '../images/body/leg.png'

const BodyQuiz = ({ handleBackToHome }) => {

    const questions = [
        {
            image:farm,
            answerOptions: [
                { answerText: 'يُسلِّم', isCorrect: false },
                { answerText: 'ساعد', isCorrect: true },
                { answerText: 'صديق', isCorrect: false },
                { answerText: 'امرأة', isCorrect: false },
            ],
        },
        {
            image:leg,
            answerOptions: [
                { answerText: 'رجل', isCorrect: true },
                { answerText: 'قدم', isCorrect: false },
                { answerText: 'امرأة', isCorrect: false },
                { answerText: 'صديق', isCorrect: false },
            ],
        },
        {
            image:head,
            answerOptions: [
                { answerText: 'رأس', isCorrect: true },
                { answerText: 'جدتي', isCorrect: false },
                { answerText: 'امرأة', isCorrect: false },
                { answerText: 'قدم', isCorrect: false },
            ],
        },
        {
            image:uarm,
            answerOptions: [
                { answerText: 'أخت', isCorrect: false },
                { answerText: 'امرأة', isCorrect: false },
                { answerText: 'جدتي', isCorrect: false },
                { answerText: 'الذراع العلوية', isCorrect: true },
            ],
        },
        {
            image:hand,
            answerOptions: [
                { answerText: 'الذراع العلوية', isCorrect: false },
                { answerText: 'رأس', isCorrect: false },
                { answerText: 'يُسلِّم', isCorrect: true },
                { answerText: 'صديق', isCorrect: false },
            ],
        },
        {
            image:foot,
            answerOptions: [
                { answerText: 'قدم', isCorrect: true },
                { answerText: 'رأس', isCorrect: false },
                { answerText: 'امرأة', isCorrect: false },
                { answerText: 'الذراع العلوية', isCorrect: false },
            ],
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setScore((score) => score + 1)
        }
        if (currentIndex === questions.length - 1) {
            setQuizFinished(true)
        }
        else {
            setCurrentIndex((value) => value + 1)
        }
    }

    const handlePlayAgain = () => {
        setQuizFinished(false);
        setCurrentIndex(0);
        setScore(0)
    }

    return (
        <>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full max-w-2xl px-4" >
                <div className="bg-slate-100 shadow-md rounded-lg mt-4">
                    {quizFinished ? (
                        <div className="text-center px-4 py-8">
                            <img src={score === 0 ? cross : checked} className="w-14 m-auto" alt="" />
                            <h3 className="text-2xl mt-4"> You scored <b>{score}</b> out of <b>{questions.length}</b></h3>
                            <div className="flex items-center justify-center py-1 mt-8">
                            <button className='px-3 mx-2 text-blue-400 hover:text-blue-300' onClick={() => window.location.href = 'http://127.0.0.1:5500/prototype/category.html'}>
                                    Back To Home
                                </button>
                                <button className='px-3 mx-2 text-blue-400 hover:text-blue-300' onClick={handlePlayAgain}>
                                    Play Again
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>

                            <div className="bg-blue-400 text-center px-4 py-2 rounded-t-lg">
                                <h2 className="text-2xl text-white font-semibold tracking-wide">Body Part Quiz</h2>
                            </div>
                            <div className="image-container">
                                <img 
                                    src={questions[currentIndex].image}
                                    alt="Body Quiz"
                                    className="image"
                                />
                            </div>
                            <div className="py-8 px-4">
                                <div className="pb-2">
                                    <h3 className="font-semibold text-lg"><span className="text-lg bg-slate-200 w-fit rounded-lg px-2 py-1 shadow mr-2">{currentIndex + 1} / {questions.length} </span>{questions[currentIndex].questionText}</h3>
                                </div>
                                <div className="mt-2 flex flex-col text-left">
                                    {questions[currentIndex].answerOptions.map((answer) => {
                                        return (
                                            <button className="mt-2 bg-slate-200 rounded-lg border border-slate-300 py-2 px-4 hover:bg-slate-300" onClick={() => handleAnswerClick(answer.isCorrect)} key={answer.answerText}>
                                                {answer.answerText}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div >
        </>
    )
}

export default BodyQuiz
