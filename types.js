const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList
} = require('graphql');

movieType = new GraphQLObjectType({
    name: 'Movie',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        year: { type: GraphQLInt },
        directorId: { type: GraphQLID }
    }
});

directorType = new GraphQLObjectType({
    name: 'Director',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        movies: { 
            type: new GraphQLList(movieType),
            resolve: function (source, args) {
                return _.filter(movies, { directorId: source.id })
            }
        }
    }
});

exports.movieType = movieType;
exports.directorType = directorType;