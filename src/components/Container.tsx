import styled from 'styled-components'

interface ContainerProps {
  padding?: string
}

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  padding: ${(props: ContainerProps): string => props.padding ?? 15 + 'px'};
`

export default Container
