import React from 'react';
import TaskManager from '../components/TaskManager';
import Card from '../components/Card';

const Tasks = () => (
  <Card>
    <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
    <TaskManager />
  </Card>
);

export default Tasks;
