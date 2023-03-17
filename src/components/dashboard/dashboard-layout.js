import React from 'react'
import styled from 'styled-components'
import DashboardSidebar from './Dashboard-Sidebar'

const DashboardLayout = ({ children }) => {
  return (
    <Wrapper>
      <aside>
        <DashboardSidebar />
      </aside>
      <section>{children}</section>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;

  aside {
    min-width: 200px;
    background-color: var(--grey-3);
  }
  @media (max-width: 768px) {
    aside {
      width: 30vw;
    }
  }
`
export default DashboardLayout
