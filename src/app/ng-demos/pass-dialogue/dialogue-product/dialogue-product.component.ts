import { Component } from '@angular/core';
import { NgStateService } from 'src/app/ng-dynamic-forms/ng-state.service';

@Component({
  selector: 'app-form-c',
  templateUrl: './dialogue-product.component.html',
})
export class ProductDialogueComponent {
  constructor(public stateService: NgStateService) {}

  ngOnInit(): void {
    this.stateService.dialogueName = 'dialogue-product';
    this.stateService.dialoguePath = 'dialogue-product/';
  }
}
