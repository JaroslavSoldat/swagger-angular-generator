/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api/api-base-path
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '|shared/forms';
import {TicketingService} from '../../../controllers/Ticketing';

@Injectable()
export class Ticketing_show-ticket-detail_readFormService {
  form: FormGroup;
  constructor(
    private ticketingService: TicketingService,
  ) {
    this.form = new FormGroup({
      date_from: new FormControl(undefined, []),
      date_to: new FormControl(undefined, []),
      id: new FormControl(undefined, [Validators.required]),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.ticketingService.ticketing_show-ticket-detail_read(data);
  }
}
