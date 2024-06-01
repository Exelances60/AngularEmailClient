import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { emailResolverResolver } from './email-resolver.resolver';

describe('emailResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => emailResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
