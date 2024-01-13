import mongoose from 'mongoose';

const TasksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'new',
  }
});

const Tasks = mongoose.model('Tasks', TasksSchema);

export default Tasks;
