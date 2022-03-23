import yupLocale from 'config/yup-locale';
import { Topic } from 'interfaces/target/topic-interface';
import { string, setLocale, mixed, number } from 'yup';

setLocale(yupLocale);

export const radius = {
  radius: number().required(),
};

export const title = {
  title: string().required(),
};

export const topic = {
  topic: mixed()
    .transform((topic: Topic) => {
      return topic && topic.value !== '' ? topic.value : null;
    })
    .required(),
};

export const lat = {
  lat: string().required(),
};

export const lng = {
  lng: string().required(),
};
