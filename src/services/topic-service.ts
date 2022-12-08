import { httpClient } from 'http-client';
import Topic from 'interfaces/topic/topic-interface';
import {
  TopicCollection,
  TopicCollectionResponse,
} from 'interfaces/topic/topic-response-interface';
import { TOPIC_BASE_URL } from 'constants/api-urls-constants';

class TopicService {
  static async findAllTopics(): Promise<TopicCollection[]> {
    try {
      const { data } = await httpClient.get<TopicCollectionResponse>(TOPIC_BASE_URL, { data: {} });
      return data.topics;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static findTopicById(id: string | number, topicCollection: TopicCollection[]): Topic | undefined {
    try {
      const topicFinded = topicCollection.find(collection => collection.topic.id === id);
      return topicFinded?.topic;
    } catch (status) {
      throw Error(status as string);
    }
  }
}

export default TopicService;
