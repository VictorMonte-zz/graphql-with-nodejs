const { GraphQLObjectType, GraphQLString } = require('graphql');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,

            resolve: function() {
                return "hello world";
            }
        }
    }
});

exports.queryType = queryType;