import Tasks from './models/Tasks.model.js';

const resolvers = {
  Query: {
      getTasks: async () => {
        return await Tasks.find();
      },
    },

    Mutation: {
      createTask: async (_, args) => {
        const { name, description } = args.input;
    
        const newTask = new Tasks({
          name,
          description,
          status: 'new'
        });
    
        try {
          const savedTask = await newTask.save();
          return savedTask.toObject();
        } catch (error) {
          console.error('Failed to create task:', error);
          throw new Error('Failed to create task');
        }
      },
      deleteTask: async (_, args) => {
        const taskId = args.id;
      
        try {
          const deletedTask = await Tasks.findByIdAndDelete(taskId);
          if (!deletedTask) {
            throw new Error('Task not found');
          }
          return deletedTask.toObject();
        } catch (error) {
          console.error('Failed to delete task:', error);
          throw new Error('Failed to delete task');
        }
      },
      updateTaskStatus: async (_, args) => {
        const {id, newStatus} = args;
        
        try {
          const updatedTask = await Tasks.findByIdAndUpdate(id, { status: newStatus }, { new: true });

          if (!updatedTask) {
            throw new Error('Task not found');
          }
          return updatedTask.toObject();
        } catch (error) {
          console.error('Failed to update task:', error);
          throw new Error('Failed to update task');
        }
      },
    }

}

export default resolvers;