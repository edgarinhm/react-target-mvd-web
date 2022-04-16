import { httpClient } from 'http-client';
import Target from 'interfaces/target/target-interface';
import TargetRequest from 'interfaces/target/target-request-interface';
import {
  TargetColletionResponse,
  TargetColletion,
} from 'interfaces/target/target-response-interface';

const TARGET_BASE_URL = '/targets';

class TargetService {
  static async createTarget(target: Target): Promise<Target> {
    try {
      const targetRequest: TargetRequest = { target };
      const { data } = await httpClient.post<TargetColletion>(TARGET_BASE_URL, targetRequest);
      return data.target;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static async findAllTargets(): Promise<TargetColletion[]> {
    try {
      const { data } = await httpClient.get<TargetColletionResponse>(TARGET_BASE_URL, { data: {} });
      return data.targets;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static async deleteTarget(id: number): Promise<string> {
    try {
      const { status } = await httpClient.delete(`${TARGET_BASE_URL}/${id}`, { data: {} });
      return `${status}`;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }
}

export default TargetService;
