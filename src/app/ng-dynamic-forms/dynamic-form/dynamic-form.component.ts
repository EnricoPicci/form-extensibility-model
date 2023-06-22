import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Subscription, tap } from 'rxjs';

import { toFormGroup } from './form-group-questions-convertions';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';
import {
  DynamicFormLayout,
  DynamicFormElement,
} from 'src/app/ts-dynamic-form/form';
import { QuestionBase } from 'src/app/ts-dynamic-form/questions/question-base';
import { Action } from 'src/app/ts-dynamic-form/actions/action';
import { Section } from 'src/app/ts-dynamic-form/section';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input() formObj!: DynamicFormLayout;
  @Input() title!: string;

  subscriptions: Subscription[] = [];

  form!: FormGroup;
  elements: DynamicFormElement[] = [];

  constructor(public stateService: DialogueState, private router: Router) {}

  ngOnInit() {
    this.form = toFormGroup(this.formObj);

    this.elements = this.formObj.getElementsOrdered();

    let sub: Subscription;
    sub = this.stateService.message$.subscribe((message) => {
      console.log(`>>>>>>>>>>>>>> `, message);
    });
    this.subscriptions.push(sub);

    sub = this.stateService.nextRoute$
      .pipe(
        tap((nextRoute) => {
          console.log('>>>>>>>>>>>>>>>>>>> nextRoute$', nextRoute);
          this.router.navigate([nextRoute]);
        })
      )
      .subscribe();
    this.subscriptions.push(sub);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  asSection(element: DynamicFormElement) {
    return element as Section;
  }
  asQuestion(element: DynamicFormElement) {
    return element as QuestionBase<any>;
  }
  asAction(element: DynamicFormElement) {
    return element as Action;
  }
}
