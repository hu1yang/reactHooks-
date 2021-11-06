import React from 'react';
import './style.css';
import Child from './child';

const App = () => {
  const childRef = React.useRef();
  const cilds = () => {
    console.log(childRef.current.haha());
  };
  return (
    <div>
      <button onClick={cilds}>获取child方法</button>
      <Child ref={childRef} />
    </div>
  );
};

export default App;
