import { object } from 'yup';
import { radius, title, topic, lat, lng } from './target-validation';

const createValidation = object().shape({
  ...radius,
  ...title,
  ...topic,
  ...lat,
  ...lng,
});

export default createValidation;
