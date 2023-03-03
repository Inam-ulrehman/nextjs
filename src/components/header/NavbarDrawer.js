import React from 'react'
import styled from 'styled-components'

const NavbarDrawer = ({ state, setState }) => {
  return (
    <Wrapper
      style={{
        width: `${state.showNavbarDrawer ? 'inherit' : '00px'}`,
      }}
    >
      hello
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default NavbarDrawer
