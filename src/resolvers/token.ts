import _ from 'lodash';
import { RESPONSE_CODE } from '@/config/constant';
import { TokenInterface } from '@/models/token';
import { createOneToken, filterToken } from '@/services/token';

export default {
  Query: {
    getAllToken: async (parent: any, args: any) => {
      const listToken = await filterToken();

      return {
        message: 'Get all Token success!',
        code: RESPONSE_CODE.SUCCESS,
        data: listToken,
      };
    },
  },

  Mutation: {
    createOneToken: async (parent: any, args: { data: TokenInterface }) => {
      const { data } = args;
      const createdToken = await createOneToken(data);
      return { code: RESPONSE_CODE.SUCCESS, data: createdToken };
    },
  },
};
