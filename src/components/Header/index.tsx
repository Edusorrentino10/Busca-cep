import { Container } from './styles'
import Image from 'next/image'
import houseImage from '@/assets/house.png'

export function Header() {
  return (
    <Container>
      <p>BuscaCEP</p>
      <span>
        <Image src={houseImage} width={40} alt="" />
      </span>
    </Container>
  )
}
