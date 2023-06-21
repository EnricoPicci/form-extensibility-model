import { Component, Inject } from '@angular/core';
import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';

@Component({
  selector: 'app-form-c',
  templateUrl: './dialogue-product-spain.component.html',
  providers: [FormStateService],
})
export class ProductDialogueSpainComponent {
  constructor(public stateService: FormStateService) {}

  ngOnInit(): void {
    this.stateService.dialogueName = 'dialogue-product-spain';
    this.stateService.dialoguePath = 'dialogue-product-spain/';
  }
}
