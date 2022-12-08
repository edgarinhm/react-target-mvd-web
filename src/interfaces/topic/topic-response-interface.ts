import Topic from './topic-interface';

export interface TopicCollection {
  topic: Topic;
}

export interface TopicCollectionResponse {
  topics: TopicCollection[];
}
