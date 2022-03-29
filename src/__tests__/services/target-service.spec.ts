import targetService from 'services/target-service';
import { UNAUTHORIZED } from 'constants/api-constants';
import Target from 'interfaces/target/target-interface';
import {} from '../../constants/api-constants';

describe('Login Service', () => {
  let target: Target;

  beforeEach(() => {
    target = {
      title: 'new target',
      lat: -94.5566,
      lng: -94.5566,
      radius: 27384.4,
      topicId: 0,
    };
  });

  describe('when API call fails', () => {
    it('Should throw error 400', async () => {
      try {
        const targetCreated = await targetService.createTarget({ target });
        await expect(targetCreated.id).toBeDefined();
      } catch (error) {
        await expect(Promise.reject(error)).rejects.toThrow(UNAUTHORIZED);
      }
    });
  });

  describe('when API call is successful', () => {
    it('Should return a target', async () => {
      try {
        target.topicId = 2;
        const targetCreated = await targetService.createTarget({ target });
        await expect(targetCreated.id).toBeDefined();
      } catch (error) {
        await expect(Promise.reject(error)).rejects.toThrow(UNAUTHORIZED);
      }
    });
  });
});
