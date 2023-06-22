import { Component } from '@angular/core';
import { getDynamicOnblurForm } from 'src/app/ts-demos/demo-dynamic-onblur/demo-dynamic-onblur.form';
import { DynamicFormLayout } from 'src/app/ts-dynamic-form/form';
import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

@Component({
  selector: 'app-onblur',
  templateUrl: './onblur.component.html',
  styleUrls: ['./onblur.component.css'],
  providers: [DialogueState],
})
export class OnblurComponent {
  form!: DynamicFormLayout;
  title = 'Dynamic Onblur Form';

  constructor() {}

  ngOnInit(): void {
    this.form = getDynamicOnblurForm();
  }
}
