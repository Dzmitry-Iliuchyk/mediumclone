import { Component, Input, OnInit } from '@angular/core';
import { IBackEndErrors } from 'src/app/shared/types/backEndErrors.interface';

@Component({
  selector: 'mc-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrl: './backend-errors.component.scss',
})
export class BackendErrorsComponent implements OnInit {
  @Input('BackendErrors') backendErrorsProps: IBackEndErrors;

  errorMesages: string[];

  ngOnInit() {
    this.errorMesages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(', ');
        return `${name} - ${messages}`;
      }
    );
  }
}
