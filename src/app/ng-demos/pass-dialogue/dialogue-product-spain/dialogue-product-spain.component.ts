import { Component, Inject } from '@angular/core';
import { NgStateService } from 'src/app/ng-dynamic-forms/ng-state.service';

@Component({
  selector: 'app-form-c',
  templateUrl: './dialogue-product-spain.component.html',
})
export class ProductDialogueSpainComponent {
  constructor(public stateService: NgStateService) {}

  ngOnInit(): void {
    this.stateService.dialogueName = 'dialogue-product-spain';
    this.stateService.dialoguePath = 'dialogue-product-spain/';
  }
}
