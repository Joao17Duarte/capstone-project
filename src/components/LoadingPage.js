import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

export default function LoadingPage({
  done,
  hideLoadingPage,
  setHideLoadingPage,
}) {
  const [style, setStyle] = useState()

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setHideLoadingPage(true)
    }, 3000)

    return () => {
      clearTimeout(timer1)
    }
  }, [setHideLoadingPage])

  useEffect(() => {
    let styleProgress = setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      }
      setStyle(newStyle)
    }, 100)
    return () => {
      clearTimeout(styleProgress)
    }
  })

  return (
    <>
      <AnimationWrapper hidePage={hideLoadingPage}>
        <Text>🎬 Are you ready to have Fun ?? 🍿 </Text>
        <Progress>
          <ProgressDone style={style}>{done}%</ProgressDone>
        </Progress>
      </AnimationWrapper>
    </>
  )
}

const AnimationWrapper = styled.section`
  display: ${props => (props.hidePage ? 'none' : 'block')};
`

const Progress = styled.div`
  z-index: 0;
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin: 20px auto 70vh auto;
  height: 30px;
  width: 300px;
  &.fadeOut {
    opacity: 0.4;
    transition: all 3s;
  }
`

const ProgressDone = styled.div`
  background: linear-gradient(crimson, black);
  box-shadow: 0 2px 5px crimson;
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 2s ease-in-out 0.3s;
`
const Text = styled.span`
  display: grid;
  text-align: center;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 0;
`
