import List from "../ui/List";
import Task from "./Task"; 

const task = [
  {
    title: "Hello",
    status: "pending...", 
    time: "9:00"
  },
  {
    title: "Hello",
    status: "pending...", 
    time: "9:00"
  },
  {
    title: "Hello",
    status: "pending...", 
    time: "9:00"
  },
  {
    title: "Hello",
    status: "pending...", 
    time: "9:00"
  },
  {
    title: "Hello",
    status: "pending...", 
    time: "9:00"
  },
  {
    title: "Hello",
    status: "pending...", 
    time: "9:00"
  },
  {
    title: "Hello",
    status: "pending...", 
    time: "9:00"
  },
  {
    title: "Hello",
    status: "pending...", 
    time: "9:00"
  },
  {
    title: "Hello",
    status: "pending...", 
    time: "9:00"
  },
  {
    title: "Hello",
    status: "pending...", 
    time: "9:00"
  },
];

const Tasks = ({ className }) => {
  return <List>
    {task.map(t => <Task title={t.title} info={`${t.status} - ${t.time}`}/>)}
  </List>;
};

export default Tasks;
