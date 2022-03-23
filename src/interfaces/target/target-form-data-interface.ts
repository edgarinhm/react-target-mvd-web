import { Topic } from './topic-interface';

export default interface TargetFormData {
  title: string;
  topic: Topic;
  radius: number;
  lat: number;
  lng: number;
}
