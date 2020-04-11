import React, { useReducer } from 'react';
// import ClassCounter from './Compoments/UseState/classCounter'
// import HookCounter from './Compoments/UseState/HookCounter1'
// import HookCounter2 from './Compoments/UseState/HookCounter2'
// import HookCounter3 from './Compoments/UseState/HookCounter3'
// import HookCounter4 from './Compoments/UseState/HookCounter4'
// import ClassCounterOne from './Compoments/UseEffect/ClassCounterOne'
// import UseEffect1 from './Compoments/UseEffect/UseEffect1'
// import ClassMouse from './Compoments/UseEffect/ClassMouse'
//import UseEffectMouse from './Compoments/UseEffect/UseEffectMouse'
// import MouseContainer from './Compoments/UseEffect/MouseContainer'
// import IntervalClassCounter from './Compoments/UseEffect/IntervalClassCounter'
// import UseEffectTech from './Compoments/UseEffect/UseEffectTech'
// import UseEffectIntervalClassCounter from './Compoments/UseEffect/UseEffectIntervalClassCounter'
//import DataFetching from './Compoments/FetchingData/DataFetching'

// import Counter1 from './Compoments/Reducer/Counter1'
// import Counter2 from './Compoments/Reducer/Counter2'
// import Counter3 from './Compoments/Reducer/Counter3'

// import CompomentC from './Compoments/Context/CompomentC'
import './App.css';
// import { UserProvider, ChannelProvider } from './userContext';

// import CompomentA from './Compoments/ContextReducers/CompomentA'
// import CompomentB from './Compoments/ContextReducers/CompomentB'
// import CompomentC from './Compoments/ContextReducers/CompomentC'
// import { CountContext, CountContextProvider } from './Compoments/ContextReducers/rootContext'
import Reducers from './Compoments/ContextReducers/Reducers'


// const initialState = 0

// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state + 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      {/* Count - {count} */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter4 /> */}

      {/* <ClassCounterOne /> */}
      {/* <UseEffect1 /> */}
      {/* <ClassMouse /> */}
      {/* <UseEffectMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <UseEffectTech/> */}
      {/* <UseEffectIntervalClassCounter /> */}
      {/* <DataFetching /> */}


      {/* jab hum log userProvider ko comment kr dege to userConsumer default lega ho hum log createContext mai pass keye hoge */}
      {/* <UserProvider value="Akash Gupta">
        <ChannelProvider value="Code With Me">
          <CompomentC />
        </ChannelProvider>
      </UserProvider> */}

      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      {/* <Counter3 /> */}
      {/* <CountContextProvider value={{ countState: count, countDispatch: dispatch }}>
        <CompomentA />
        <CompomentB />
        <CompomentC />
      </CountContextProvider> */}
      <Reducers />

    </div>
  );
}

export default App;


// 3 Steps are there to create a Context
// 1.Create a context
// 2.Provide a context value
// 3.Consume the context value


// useReducer is a hook is used for state management

// 1.useReducer(reducer, initialState)
// 2.reducer(currentState, action)