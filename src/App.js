import React from 'react';
import ClassCounter from './Compoments/classCounter'
import HookCounter from './Compoments/HookCounter1'
import HookCounter2 from './Compoments/HookCounter2'
import HookCounter3 from './Compoments/HookCounter3'
import HookCounter4 from './Compoments/HookCounter4'
import './App.css';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      <HookCounter4 />
    </div>
  );
}

export default App;
