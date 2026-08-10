import { TestBed } from '@angular/core/testing';

import { ApiUFMunicipo } from './api-ufmunicipo';

describe('ApiUFMunicipo', () => {
  let service: ApiUFMunicipo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUFMunicipo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
