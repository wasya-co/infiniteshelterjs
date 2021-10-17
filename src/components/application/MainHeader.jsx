import React from 'react'
import styled from 'styled-components'

import { logg, C, } from "$shared"
import { MenuLeft, } from "$components/application"

const Header = styled.div`
  // border: 1px solid red;

  flex-grow: 1;

  text-align: center;
  font-size: 2em;


`;

const Root = styled.div`
  // border: 1px solid blue;

  display: flex;
  justify-content: center;
  line-height: 2em;
  padding: 2em 0;
`;

const MainHeader = (props) => {
  // logg(props, 'MainMenu')

  return <Root>
    <MenuLeft variant={C.variants.inline} />
    <Header>My Local Guide</Header>
  </Root>
}

export default MainHeader
