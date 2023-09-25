import { styled } from '@/styles'

export const Container = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '25px',
  width: '100%',
  height: '100px',
  background: '$primary',
  color: '$secondary',
  fontSize: '2.2rem',
  fontStyle: 'italic',
  fontWeight: 'bold',
})
