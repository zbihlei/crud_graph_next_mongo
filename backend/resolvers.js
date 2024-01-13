import Tasks from './models/Tasks.model.js';

const resolvers = {
  Query: {
      getTasks: async () => {
        return await Tasks.find();
      },
    }

}

export default resolvers;