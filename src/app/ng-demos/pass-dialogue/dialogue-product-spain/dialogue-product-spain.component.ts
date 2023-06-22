import { Component, Inject } from '@angular/core';
import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

@Component({
  selector: 'app-form-c',
  templateUrl: './dialogue-product-spain.component.html',
  providers: [DialogueState],
})
export class ProductDialogueSpainComponent {
  constructor(public stateService: DialogueState) {}

  ngOnInit(): void {
    this.stateService.dialogueName = 'dialogue-product-spain';
    this.stateService.dialoguePath = 'dialogue-product-spain/';
  }
}
