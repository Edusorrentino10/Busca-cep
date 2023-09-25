import { MagnifyingGlass } from 'phosphor-react'
import { Button, Container, Input, TableContainer } from './styles'
import { LoadingComponent } from '../MapAnimation'
import { useState } from 'react'

export function SearchCEP() {
  const [hasCep, setHasCep] = useState(true)

  return (
    <Container>
      <form>
        <Input type="text" placeholder="Digite o CEP aqui..." required />
        <Button type="submit">
          <MagnifyingGlass size={23} color="#ffffff" weight="bold" />
        </Button>
      </form>
      {hasCep ? (
        <TableContainer>
          <table>
            <tbody>
              <tr>
                <th>CEP</th>
                <td>Data 1</td>
              </tr>
              <tr>
                <th>Cidade</th>
                <td>Data 2</td>
              </tr>
              <tr>
                <th>Bairro</th>
                <td>Data 3</td>
              </tr>
              <tr>
                <th>Logradouro</th>
                <td>Data 4</td>
              </tr>
              <tr>
                <th>UF</th>
                <td>Data 4</td>
              </tr>
              <tr>
                <th>IBGE</th>
                <td>Data 4</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      ) : (
        <LoadingComponent />
      )}
    </Container>
  )
}
