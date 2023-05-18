import { QuestionBase } from './question-base';

export function toObject(questions: QuestionBase<any>[]) {
  const obj: any = {};
  questions.forEach((q) => (obj[q.key] = q.value));
  return obj;
}

export function fillQuestions(questions: QuestionBase<any>[], obj: any) {
  questions.forEach((q) => (q.value = obj[q.key]));
}
