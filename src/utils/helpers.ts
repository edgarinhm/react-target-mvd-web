import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';

export const parseInputErrors = (error: string | Array<string>) => {
  if (!error) {
    return;
  }

  if (Array.isArray(error)) {
    return error[0];
  }

  return error;
};

export const applyQueryParams = (url: string, params: Record<any, any> = {}) => {
  if (isEmpty(params)) {
    return url;
  }

  return `${url}?${queryString.stringify(params)}`;
};
