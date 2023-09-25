import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '115px',
  marginTop: '120px',
  backgroundColor: '$secondary',
  color: '$primary',
  fontSize: '1rem',

  form: {
    display: 'flex',
    gap: '20px',
  },
})

export const Input = styled('input', {
  borderRadius: '5px',
  padding: '10px',
  width: '300px',
})

export const Button = styled('button', {
  borderRadius: '5px',
  padding: '5px 8px',
  background: '$primary',
  cursor: 'pointer',
})

export const TableContainer = styled('div', {
  overflowX: 'auto',

  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },

  td: {
    padding: '15px',
    border: '1px solid #ddd',
    textAlign: 'left',
    fontSize: '0.9rem',
  },

  th: {
    position: 'sticky',
    left: '0',

    backgroundColor: '#f2f2f2',
    fontSize: '0.95rem',

    padding: '15px',
    border: '1px solid #ddd',
    textAlign: 'center',
  },
})
