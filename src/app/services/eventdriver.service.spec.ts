import { TestBed } from '@angular/core/testing';

import { EventdriverService } from './eventdriver.service';

describe('EventdriverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventdriverService = TestBed.get(EventdriverService);
    expect(service).toBeTruthy();
  });
});
