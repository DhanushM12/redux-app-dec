import '../App.css';
import Header from './Header';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <Header />
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
