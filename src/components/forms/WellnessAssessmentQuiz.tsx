import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions } from '../../assets/data/content';
import type { QuizResult } from '../../types';
import Button from '../common/Button';

function getQuizResult(score: number): QuizResult {
  const maxScore = quizQuestions.length * 4;
  const percentage = (score / maxScore) * 100;

  if (percentage >= 80) {
    return {
      score: percentage,
      title: 'Excellent Health',
      description: 'You maintain great health habits! Keep up the excellent work.',
      recommendation: 'Consider our Holistic Lifestyle Reset to optimize your already strong foundation.',
    };
  }
  if (percentage >= 60) {
    return {
      score: percentage,
      title: 'Good Foundation',
      description: 'You have a solid health foundation with room for improvement.',
      recommendation: 'Our Mind & Body Balance program can help elevate your health routine.',
    };
  }
  if (percentage >= 40) {
    return {
      score: percentage,
      title: 'Needs Attention',
      description: 'Several areas of your health could benefit from focused attention.',
      recommendation: 'We recommend starting with our Weight Transformation or Nutrition program.',
    };
  }
  return {
    score: percentage,
    title: 'Time for Change',
    description: 'Your health habits need significant improvement for better health outcomes.',
    recommendation: 'Book a free consultation — our experts will create a personalized plan for you.',
  };
}

export default function WellnessAssessmentQuiz() {
  const [step, setStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  const currentQuestion = quizQuestions[step];
  const isLast = step === quizQuestions.length - 1;

  const handleNext = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = { ...answers, [currentQuestion.id]: selectedAnswer };
    setAnswers(newAnswers);
    setSelectedAnswer(null); // Reset selection for next step

    if (isLast) {
      const totalScore = Object.values(newAnswers).reduce((sum, v) => sum + v, 0);
      setResult(getQuizResult(totalScore));
    } else {
      setStep(step + 1);
    }
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
    setSelectedAnswer(null);
  };

  return (
    <div className="relative bg-white rounded-[32px] p-6 md:p-10 border border-[#E2E8E4]/80 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden z-10">
      {/* Visual background details */}
      <div className="absolute -right-24 -top-24 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-24 -bottom-24 w-48 h-48 bg-[#72A93B]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mb-8 border-b border-[#E2E8E4]/50 pb-6 relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold text-dark tracking-tight">Health Assessment</h3>
        </div>
        <p className="text-muted text-sm md:text-base leading-relaxed">
          Answer 5 quick questions to assess your current health level and receive a personalized recommendation.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {result ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="text-center py-6 max-w-2xl mx-auto relative z-10"
          >
            {/* Radial Score Gauge */}
            <div className="relative w-36 h-36 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-[#E8F2EA]"
                  strokeWidth="7"
                  fill="transparent"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-primary"
                  strokeWidth="7"
                  fill="transparent"
                  strokeDasharray="263.89"
                  initial={{ strokeDashoffset: 263.89 }}
                  animate={{ strokeDashoffset: 263.89 - (263.89 * result.score) / 100 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold text-[#003D34]">{Math.round(result.score)}%</span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#72A93B] mt-0.5">Score</span>
              </div>
            </div>

            <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#72A93B] bg-[#E8F2EA] rounded-full px-4 py-1.5 mb-3">
              {result.title}
            </span>
            <p className="text-muted text-sm md:text-base mb-8 max-w-lg mx-auto leading-relaxed">
              {result.description}
            </p>

            {/* Recommendation details card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#E8F2EA]/40 to-[#E8F2EA]/10 border border-[#E2E8E4]/60 shadow-inner text-left mb-8 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 opacity-10 text-primary pointer-events-none">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-24 h-24">
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M9 16a5 5 0 1 1 6 0" />
                </svg>
              </div>
              <div className="flex gap-4 items-start relative z-10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M9 16a5 5 0 1 1 6 0" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xs font-extrabold text-[#003D34] uppercase tracking-wider">Your Personalized Plan</h5>
                  <p className="text-dark font-bold text-base mt-1.5 leading-relaxed">{result.recommendation}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={restart} className="px-6">Retake Quiz</Button>
              <Button to="/contact" variant="primary" className="px-6 flex items-center gap-2 group">
                Book Consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl relative z-10"
          >
            {/* Elegant Header Progress tracker */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#72A93B] bg-[#E8F2EA] px-3.5 py-1.5 rounded-full">
                  Step {step + 1} of {quizQuestions.length}
                </span>
                <span className="text-xs font-bold text-muted">
                  {Math.round(((step + 1) / quizQuestions.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full h-2 bg-[#E2E8E4]/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary via-[#72A93B] to-primary rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((step + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <h4 className="text-xl md:text-2xl font-extrabold text-dark leading-tight mb-8">
              {currentQuestion.question}
            </h4>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((option, index) => {
                  const letters = ['A', 'B', 'C', 'D'];
                  const isSelected = selectedAnswer === option.value;
                  return (
                    <div
                      key={option.value}
                      onClick={() => setSelectedAnswer(option.value)}
                      className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'border-primary bg-[#E8F2EA]/20 shadow-md shadow-primary/5 scale-[1.01]'
                          : 'border-[#E2E8E4] bg-white hover:border-[#72A93B]/50 hover:bg-[#F8FAF6] hover:scale-[1.005]'
                      }`}
                    >
                      {/* Letter badge */}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-sm transition-all duration-300 shrink-0 ${
                        isSelected
                          ? 'bg-primary text-white shadow-sm'
                          : 'bg-[#E8F2EA] text-[#003D34] group-hover:bg-[#003D34] group-hover:text-white'
                      }`}>
                        {letters[index]}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm md:text-[15px] font-extrabold transition-colors duration-300 ${
                          isSelected ? 'text-[#003D34]' : 'text-[#2D3E42] group-hover:text-[#003D34]'
                        }`}>
                          {option.label}
                        </p>
                      </div>

                      {/* Custom radio button check */}
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isSelected 
                          ? 'border-primary bg-primary text-white shadow-sm' 
                          : 'border-[#CBD5E1] bg-white group-hover:border-[#72A93B]'
                      }`}>
                        {isSelected && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" className="w-3 h-3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="max-w-md pt-4">
                <button
                  onClick={handleNext}
                  disabled={selectedAnswer === null}
                  className={`w-full py-4 rounded-xl text-sm font-extrabold uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                    selectedAnswer === null
                      ? 'bg-[#E2E8E4]/80 text-[#8E9B9A] border border-[#E2E8E4] cursor-not-allowed shadow-none'
                      : 'bg-primary text-white hover:bg-[#002D26] hover:-translate-y-0.5 shadow-primary/20 active:translate-y-0'
                  }`}
                >
                  <span>{isLast ? 'See Results' : 'Next Question'}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
