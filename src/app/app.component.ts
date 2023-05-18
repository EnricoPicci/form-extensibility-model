import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './question-base';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  questions$!: Observable<QuestionBase<any>[]>;

  constructor(private service: QuestionService) {}
  ngOnInit(): void {
    this.questions$ = this.service.getQuestions();
  }
}
