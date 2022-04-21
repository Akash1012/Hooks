import React from "react";

import Input from "./Compoments/DynamicField/Input";
// import UserForm from "./Compoments/WithOutCustomHooks/UserForm";
// import ClassTimer from "./Compoments/UseRefHook/ClassTimer";
// import ImageUpload from "./Compoments/ImageUpload/index";
import Application from "./Compoments/DynamicField/important";
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

// import Main from "./Compoments/ContextWithReducer/main";

// import CompomentC from "./Compoments/Context/CompomentC";
import "./App.css";
// import { UserProvider, ChannelProvider } from "./userContext";

// import Reducers from "./Compoments/ContextReducers/Reducers";

// import DataFetchingOne from "./Compoments/FetchingData/DataFetchingOne";
// import DataFetchingUsingReducer from "./Compoments/FetchingData/DataFetchingUsingReducer";
import Debouncing from "./Compoments/debouncingReact";
import EditableTable from "./Compoments/TableAntd";
import EditableTablem from "./Compoments/TableAntd/andtTable";
import Youtube from "./Compoments/TableAntd/youtube";
import Notification from "./Compoments/UI/notification";

function App() {
  return (
    <div className="App">
      {/* <EditableTable /> */}
      {/* <ClassTimer /> */}
      {/* <UserForm />*/}
      {/* <Input /> */}
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

      {/* <h2>Global Reducer </h2>*/}
      {/* <Reducers /> */}

      {/* <DataFetchingOne /> */}
      {/* <DataFetchingUsingReducer /> */}
      {/* <Main /> */}
      {/* <ImageUpload /> */}
      {/* <Application /> */}
      {/* <Debouncing /> */}
      {/* <Youtube />
      <EditableTablem /> */}
      <Notification />
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
