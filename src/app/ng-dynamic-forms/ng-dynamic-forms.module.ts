import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormSectionComponent } from './dynamic-form-section/dynamic-form-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormService } from '../ts-dynamic-form/services/form-service';
import { StateService } from '../ts-dynamic-form/services/state-service';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    DynamicFormSectionComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    DynamicFormSectionComponent,
  ],

  providers: [StateService, DynamicFormService],
})
export class NgDynamicFormsModule {}
