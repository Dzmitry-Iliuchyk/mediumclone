import { Component } from '@angular/core';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrl: './popular-tags.component.scss',
})
export class PopularTagsComponent {
  tags: string[];
}
