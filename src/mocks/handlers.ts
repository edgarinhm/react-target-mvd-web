import { i18nextHandlers } from './i18next-mock';
import { targetHandlers } from './targets-mock';

export const handlers = [...targetHandlers, ...i18nextHandlers];
