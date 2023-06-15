import { Action } from './actions/action';
import { QuestionBase } from './questions/question-base';

export type SectionElement = QuestionBase<any> | Action;
