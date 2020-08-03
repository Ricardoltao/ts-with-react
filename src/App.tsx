import React, { useState } from 'react';
import logo from './logo.svg';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import MouseTracker from "./components/MouseTracker";
import useMosePosition from "./hooks/useMosePosition";
import './App.css';
import withLoader from './components/withLoader';
import useURLLoader from './hooks/useURLLoader'

interface IShowResult {
  message: string;
  status: string;
}

// const DogShow: React.FC<{data: IShowResult}> = ({data}) => {
//   return (
//     <div>
//       <h2>Dog Show: {data.status}</h2>
//       <img src={data.message}/>
//     </div>
//   )
// }

const App = () => {
  // const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  const [show, setShow] = useState(true)
  // const positions = useMosePosition()
  // const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  // const dogResult = data as IShowResult
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LikeButton/>
        {/* <p>
          <button onClick={() => {setShow(!show)}}>Refresh dog photo</button>
        </p>
        {
          loading ? <p>狗 读取中</p> : <img src={dogResult && dogResult.message}/>
        } */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
