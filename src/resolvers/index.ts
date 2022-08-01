import _ from 'lodash';
import tokenResolver from './token';

const rootResolver = _.merge(tokenResolver);

export default rootResolver;
