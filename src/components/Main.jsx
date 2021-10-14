import styled from 'styled-components'

import Card from './Card'

const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;

  background-color: hsl(233, 47%, 7%);
`

export default function Main() {
  return (
    <Container>
      <Card />
    </Container>
  )
}