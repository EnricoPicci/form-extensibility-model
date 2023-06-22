import { Component } from '@angular/core';
import { DialogueState } from 'src/app/ts-dynamic-form/services/dialogue-state';

@Component({
  selector: 'app-form-c',
  templateUrl: './dialogue-product.component.html',
  providers: [DialogueState],
})
export class ProductDialogueComponent {
  constructor(public stateService: DialogueState) {}

  ngOnInit(): void {
    this.stateService.dialogueName = 'dialogue-product';
    this.stateService.dialoguePath = 'dialogue-product/';
  }
}
