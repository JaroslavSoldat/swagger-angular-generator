/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api/api-base-path
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import * as __model from '../model';

export interface RegistrationParams {
  /** login */
  loginDto: __model.LoginDto;
}

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  /**
   * create registration credentials
   * http://example.com/swagger/swagger-ui.html#!/Login/Registration
   */
  Registration(params: RegistrationParams): Observable<object> {
    const formDataParams = {
      loginDto: params.loginDto,
    };
    return this.http.post<object>(`/api/api-base-path/login`, formDataParams);
  }
  Registration_(loginDto: __model.LoginDto): Observable<object> {
    return this.Registration({loginDto});
  }

}
