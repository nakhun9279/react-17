import React from 'react';
import Todos from './components/Todos';
import TodosContainer from './containers/TodosContainer';


const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};



export default App;