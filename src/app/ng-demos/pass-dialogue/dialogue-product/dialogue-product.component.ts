import { Component } from '@angular/core';
import { FormStateService } from 'src/app/ts-dynamic-form/services/form-state-service';

@Component({
  selector: 'app-form-c',
  templateUrl: './dialogue-product.component.html',
  providers: [FormStateService],
})
export class ProductDialogueComponent {
  constructor(public stateService: FormStateService) {}

  ngOnInit(): void {
    this.stateService.dialogueName = 'dialogue-product';
    this.stateService.dialoguePath = 'dialogue-product/';
  }
}
