import { Component } from '@angular/core';
import { getDynamicOnblurForm } from 'src/app/ts-demo/demo-dynamic-onblur/demo-dynamic-onblur.form';
import { DynamicForm } from 'src/app/ts-dynamic-form/form';

@Component({
  selector: 'app-demo-dynamic-onblur',
  templateUrl: './demo-dynamic-onblur.component.html',
  styleUrls: ['./demo-dynamic-onblur.component.css'],
})
export class DemoDynamicOnblurComponent {
  form!: DynamicForm;
  title = 'Dynamic Onblur Form';

  constructor() {}

  ngOnInit(): void {
    this.form = getDynamicOnblurForm();
  }
}
