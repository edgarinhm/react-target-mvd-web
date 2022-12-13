import { rest } from 'msw';
import { TARGET_BASE_URL } from '../constants/api-urls-constants';
import targets from 'data/targets.json';

export const mockTargets = (req: any, res: any, ctx: any) => {
  return res(ctx.status(200), ctx.json(targets));
};
export const targetHandlers = [
  rest.post(process.env.REACT_APP_API_URL + TARGET_BASE_URL, mockTargets),
];
export const targetError500 = rest.post(
  process.env.REACT_APP_API_URL + TARGET_BASE_URL,
  (req: any, res: any, ctx: any) => {
    return res(ctx.status(500));
  }
);
export const targetError400 = rest.post(
  process.env.REACT_APP_API_URL + TARGET_BASE_URL,
  (req: any, res: any, ctx: any) => {
    return res(ctx.status(400));
  }
);
export const targetError401 = rest.post(
  process.env.REACT_APP_API_URL + TARGET_BASE_URL,
  (req: any, res: any, ctx: any) => {
    return res(ctx.status(401));
  }
);
