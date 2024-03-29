import { httpClient } from 'http-client';
import { Question } from 'interfaces/contact/question-interface';
import { QUESTIONS_BASE_URL } from 'constants/api-urls-constants';

class ContactService {
  static async sendQuestion(question: Question): Promise<string> {
    try {
      const { status } = await httpClient.post(QUESTIONS_BASE_URL, question);
      return `${status}`;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }
}

export default ContactService;
