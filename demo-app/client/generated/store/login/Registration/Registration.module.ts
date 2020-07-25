/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api/api-base-path
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {LoginService} from '../../../controllers/Login';
import {FormsSharedModule} from '../../forms-shared.module';
import {RegistrationFormService} from './Registration.service';

import {RegistrationEffects} from './states/effects';
import {RegistrationReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, RegistrationReducer),
    NgrxEffectsModule.forFeature([RegistrationEffects]),
  ],
  providers: [
    LoginService,
    RegistrationFormService,
  ],
})
export class RegistrationModule {}
