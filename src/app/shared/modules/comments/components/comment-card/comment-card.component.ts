import { Component, Input } from '@angular/core';
import { ICommentFromBack } from 'src/app/shared/types/ICommentFromBack.interface';

@Component({
  selector: 'mc-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.scss'
})
export class CommentCardComponent {
  @Input()  comment: ICommentFromBack
}
