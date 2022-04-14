import Topic from './topic-interface';

export interface TopicColletion {
  topic: Topic;
}

export interface TopicColletionResponse {
  topics: TopicColletion[];
}
