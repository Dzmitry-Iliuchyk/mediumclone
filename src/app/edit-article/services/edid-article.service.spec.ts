import { TestBed } from '@angular/core/testing';

import { EdidArticleService } from './edid-article.service';

describe('EdidArticleService', () => {
  let service: EdidArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdidArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
