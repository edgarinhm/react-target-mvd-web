import { rest } from 'msw';
import en from './../../public/static/locales/en.json';

export const mockI18next = (req: any, res: any, ctx: any) => {
  return res(ctx.status(200), ctx.json(en));
};
export const i18nextHandlers = [rest.get('http://localhost/static/locales/en.json', mockI18next)];
