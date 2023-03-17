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
  section {
    width: 100%;
  }
  @media (max-width: 768px) {
    aside {
      min-width: 20vw;
    }
  }
`
export default DashboardLayout
