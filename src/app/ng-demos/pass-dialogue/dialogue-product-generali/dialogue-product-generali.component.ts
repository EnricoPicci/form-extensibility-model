import { Component } from '@angular/core';

import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';

@Component({
  selector: 'app-dialogue-product-generali',
  templateUrl: './dialogue-product-generali.component.html',
  providers: [FormStateService],
})
export class DialogueProductGeneraliComponent {
  constructor(public stateService: FormStateService) {}

  ngOnInit(): void {
    this.stateService.dialogueName = 'dialogue-product-generali';
    this.stateService.dialoguePath = 'dialogue-product-generali/';
  }
}
