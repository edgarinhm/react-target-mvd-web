import { httpClient } from 'http-client';
import Target from 'interfaces/target/target-interface';
import TargetRequest from 'interfaces/target/target-request-interface';
import { ErrorApiResponse } from '../interfaces/api/error-api-response-interface';
import {
  TargetColletionResponse,
  TargetColletion,
  TargetCreateResponse,
} from 'interfaces/target/target-response-interface';

const TARGET_BASE_URL = '/targets';

class TargetService {
  static async createTarget(newTarget: Target): Promise<TargetCreateResponse> {
    try {
      const targetRequest: TargetRequest = { target: newTarget };
      const { data } = await httpClient.post<TargetCreateResponse>(TARGET_BASE_URL, targetRequest);
      return data;
    } catch ({ response: { data } }) {
      const { errors } = data as ErrorApiResponse;
      throw errors.full_messages[0];
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
