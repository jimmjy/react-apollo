const { gql } = require("apollo-server");

const typeDefs = gql`
  # Your schema will go here
  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    trips: [Launch]!
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  # Type def for size
  enum PatchSize {
    SMALL
    LARGE
  }

  type Query {
    # returns array
    launches: [Launch]!
    # returns type launch
    launch(id: ID!): Launch
    # returns a user that is logged in
    me: User
  }

  type Mutation {
    # the return types are brand new, make sure to remember ********
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchID: ID!): TripUpdateResponse!
    login(email: String): String # login token
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
`;

module.exports = typeDefs;
