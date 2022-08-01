import Token, { TokenInterface } from '@/models/token';

const filterToken = async () => {
  try {
    const listData = await Token.find({});
    return listData;
  } catch (err: any) {
    throw new Error(err);
  }
};

const createOneToken = async (data: TokenInterface) => {
  try {
    const createdData = await Token.create(data);
    return createdData;
  } catch (err: any) {
    throw new Error(err);
  }
};

const findListTokenById = async (query: any) => {
  try {
    const { listTokenId } = query;

    const listData = await Token.find({
      _id: { $in: listTokenId },
    });

    return listData;
  } catch (err: any) {
    throw new Error(err);
  }
};

export { createOneToken, filterToken, findListTokenById };
