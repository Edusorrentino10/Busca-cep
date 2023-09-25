import Lottie from 'lottie-react'
import { LoadingContainer } from './styles'
import MapAnimation from '@/animations/mapa.json'

const style = {
  height: 260,
}

export function LoadingComponent() {
  return (
    <LoadingContainer>
      <Lottie style={style} animationData={MapAnimation} loop={true} />
    </LoadingContainer>
  )
}
