import { Component } from '@angular/core';

import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

@Component({
  selector: 'app-dialogue-product-generali',
  templateUrl: './dialogue-product-generali.component.html',
  providers: [DialogueState],
})
export class DialogueProductGeneraliComponent {
  constructor(public stateService: DialogueState) {}

  ngOnInit(): void {
    this.stateService.dialogueName = 'dialogue-product-generali';
    this.stateService.dialoguePath = 'dialogue-product-generali/';
  }
}
