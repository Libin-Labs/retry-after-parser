import * as api from '@lp-labs/retry-after-parser';
import { parseRetryAfter } from '@lp-labs/retry-after-parser';
console.log(parseRetryAfter('5'));
// @ts-expect-error invalid argument must be rejected by declarations
api.parseRetryAfter(5);
