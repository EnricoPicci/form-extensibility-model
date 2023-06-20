import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Action } from 'src/app/ts-dynamic-form/actions/action';
import { SectionElement } from 'src/app/ts-dynamic-form/form-element';
import { QuestionBase } from 'src/app/ts-dynamic-form/questions/question-base';
import { Section } from 'src/app/ts-dynamic-form/section';

import { NgStateService } from '../ng-state.service';

@Component({
  selector: 'app-dynamic-form-section',
  templateUrl: './dynamic-form-section.component.html',
  styleUrls: ['./dynamic-form-section.component.css'],
})
export class DynamicFormSectionComponent implements OnInit {
  @Input() section!: Section;
  @Input() form!: FormGroup;

  constructor(public stateService: NgStateService) {}

  elements!: SectionElement[];

  ngOnInit(): void {
    this.elements = this.section.getElementsOrdered();
  }

  asQuestion(element: SectionElement) {
    return element as QuestionBase<any>;
  }
  asAction(element: SectionElement) {
    return element as Action;
  }
}
