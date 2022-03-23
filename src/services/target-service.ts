import { httpClient } from 'http-client';
import Target from 'interfaces/target/target-interface';
import TargetRequest from 'interfaces/target/target-request-interface';
import TargetResponse from 'interfaces/target/target-response-interface';

const TARGET_BASE_URL = '/targets';

class TargetService {
  static async createTarget(target: Target): Promise<Target> {
    try {
      const targetRequest: TargetRequest = { target };
      const { data } = await httpClient.post<TargetResponse>(TARGET_BASE_URL, targetRequest);
      return data.target;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }
}

export default TargetService;
