import React, {
  useState,
  useReducer,
  useEffect,
  useLayoutEffect,
  useContext,
  useRef,
} from 'react';
import MyContext from '../lib/my-context';

function countReducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}

function MyCountFun() {
  const context = useContext(MyContext);
  const inputRef = useRef();
  // const [count, setCount] = useState(0)
  const [count, dispatchCount] = useReducer(countReducer, 0);
  const [name, setName] = useState('jeck');

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setCount(c => c+1)
  //     dispatchCount({type: 'add' })
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [])

  useEffect(() => {
    console.log('effect');
    console.log(inputRef);
    return () => {
      console.log('effect deteched');
    };
  }, [count]);

  // 执行在 渲染之前， 尽量不要使用
  // useLayoutEffect(() => {
  //   console.log('useLayoutEffect')
  //   return () => {
  //     console.log('useLayoutEffect deteched')
  //   }
  // }, [count])

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => dispatchCount({ type: 'add' })}>{count}</button>
      <p>{context}</p>
    </div>
  );
}

export default MyCountFun;
