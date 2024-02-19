import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent {
@Input('errorMessage') errorMessageProps : string = 'Something went wrong!'
}
