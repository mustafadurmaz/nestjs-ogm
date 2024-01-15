import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

import UserModuleSchema from 'src/user/types/user.type.definition';

export default `#graphql
scalar JSON

${UserModuleSchema}
`;
