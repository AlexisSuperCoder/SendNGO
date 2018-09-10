/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormPosterService } from './formPoster.service';

describe('Service: FormPoster', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormPosterService]
    });
  });

  it('should ...', inject([FormPosterService], (service: FormPosterService) => {
    expect(service).toBeTruthy();
  }));
});
