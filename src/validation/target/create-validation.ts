import { object } from 'yup';
import { radius, title, topicId, lat, lng } from './target-validation';

const createValidation = object().shape({
  ...radius,
  ...title,
  ...topicId,
  ...lat,
  ...lng,
});

export default createValidation;
