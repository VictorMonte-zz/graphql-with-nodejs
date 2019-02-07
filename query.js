const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');
const _ = require('lodash');

const {movieType, directorType} = require('./types.js');
let {movies} = require('./data.js');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {

        hello: {
            type: GraphQLString,

            resolve: function() {
                return "hello world";
            }
        },

        movie: {
            type: movieType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: function(source, args) {
                return _.find(movies, { id: args.id });
            }
        },

        director: {
            type: directorType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: function(source, args) {
                return _.find(directors, { id: args.id });
            }
        }
    }
});

exports.queryType = queryType;