import { httpClient } from 'http-client';
import Topic from 'interfaces/topic/topic-interface';
import { TopicColletion, TopicColletionResponse } from 'interfaces/topic/topic-response-interface';
import { TOPIC_BASE_URL } from 'constants/api-urls-constants';

class TopicService {
  static async findAllTopics(): Promise<TopicColletion[]> {
    try {
      const { data } = await httpClient.get<TopicColletionResponse>(TOPIC_BASE_URL, { data: {} });
      return data.topics;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static findTopicById(id: string | number, topicCollection: TopicColletion[]): Topic | undefined {
    try {
      const topicFinded = topicCollection.find(collection => collection.topic.id === id);
      return topicFinded?.topic;
    } catch (status) {
      throw Error(status as string);
    }
  }
}

export default TopicService;
