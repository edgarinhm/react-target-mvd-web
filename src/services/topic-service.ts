import { httpClient } from 'http-client';
import { TopicColletion, TopicColletionResponse } from 'interfaces/topic/topic-response-interface';

const TOPIC_BASE_URL = '/topics';

class TopicService {
  static async findAllTopics(): Promise<TopicColletion[]> {
    try {
      const { data } = await httpClient.get<TopicColletionResponse>(TOPIC_BASE_URL, { data: {} });
      return data.topics;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }
}

export default TopicService;
