import './App.css';
import List from './List';

function App() {
  const items=[ //passing the array of objects as a props
    {
    text:"FIRST"
    },
    {
      text:"SECOND"
    },
    {
      text:"THIRD"
    },
    {
      text:"FOURTH"
    },
  ]
  return (
    <div>
      <List items={items}/>
    
    </div>
  );
}

export default App;
