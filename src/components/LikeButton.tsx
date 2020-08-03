import React, { useState, useEffect, useRef } from 'react'
// import useMousePositoin from '../hooks/useMosePosition'

const LikeButton: React.FC = () => {
  // const [obj, setObj] = useState({like: 0, on: true})
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  // const positions = useMousePositoin()
  useEffect(() => {
    console.log('useEffect is running')
    document.title = `点击了${like}次`
  }, [like])
  useEffect(() => {
    if(didMountRef.current) {
      console.log('this is updated')
    } else {
      didMountRef.current = true
    }
  })
  
  function handleAlertclick() {
    setTimeout(() => {
      alert('you click on ' + like)
    }, 3000)
  }
  return (
    <div>
      {/* <p>x: {positions.x}, y: {positions.y}</p> */}
      <button onClick={() => {setLike(like + 1); likeRef.current++}}>
        {like}赞
      </button>
      {/* <button onClick={() => {setOn(!on)}}>
        {on ? 'ON' : 'OFF'}
      </button> */}
      <button onClick={handleAlertclick}>
        Alert!
      </button>
    </div>
  )
}

export default LikeButton