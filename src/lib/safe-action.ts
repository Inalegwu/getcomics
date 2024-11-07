import { createSafeActionClient } from 'next-safe-action';
import { valibotAdapter } from 'next-safe-action/adapters/valibot';

export const actions = createSafeActionClient({
  validationAdapter: valibotAdapter(),
  defaultValidationErrorsShape: 'flattened',
});
