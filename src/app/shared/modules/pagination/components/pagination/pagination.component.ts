import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.services';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  
  @Input('total') total: number;
  @Input('limit') limitProps: number = 15;
  @Input('url') urlProps: string;
  @Input('currentPage') currentPageProps: number;
  
  pagesCount:number;
  pages: number[];
 constructor(private utils: UtilsService){}
  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limitProps);

    this.pages =  this.utils.range(1, this.pagesCount);
  }
}
