import { check, validationResult } from 'express-validator';

export const validateCustomerData = [
  check('store_id').isNumeric(),
  check('customers_in').isNumeric(),
  check('customers_out').isNumeric(),
  check('time_stamp').isISO8601(),
  (req: any, res: any, next: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
