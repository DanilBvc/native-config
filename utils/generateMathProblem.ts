export interface MathProblem {
  question: string;
  answer: number;
}

export const generateMathProblem = (): MathProblem => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const answer = num1 + num2;
  return { question: `${num1} + ${num2}`, answer };
};
