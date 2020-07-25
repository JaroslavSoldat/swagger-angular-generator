/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api/api-base-path
 */

import * as __model from '../model';

export interface Goods_get-goods-list_listGeneratedInlineModel {
  count: number;
  /** format: uri */
  next?: string;
  /** format: uri */
  previous?: string;
  results: __model.Goods[];
}
