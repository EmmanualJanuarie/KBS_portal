import type { Question } from "../types";

type NewAssessmentFormProps = {
  currentQuestion: Question;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<Question>>;
  questions: Question[];
};

export default function NewAssessmentForm({
  currentQuestion,
  setCurrentQuestion,
  questions
}: NewAssessmentFormProps) {

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentQuestion(prev => ({ ...prev, questionText: e.target.value }));
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion(prev => ({ ...prev, options: newOptions }));
  };

  return (
    <div className="flex flex-col gap-5 bg-white p-5 rounded-xl">
      <h2 className="text-2xl font-bold">Add Assessment Question ({questions.length + 1}/10)</h2>

      <input
        type="text"
        placeholder="Question"
        className="p-3 border rounded-lg w-full"
        value={currentQuestion.questionText}
        onChange={handleQuestionChange}
      />

      {currentQuestion.options.map((opt, idx) => (
        <input
          key={idx}
          type="text"
          placeholder={`Option ${idx + 1}`}
          className="p-3 border rounded-lg w-full"
          value={opt}
          onChange={(e) => handleOptionChange(idx, e.target.value)}
        />
      ))}
    </div>
  );
}
