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
    margin-top: -1.1rem;
    position: relative;
    min-width: 200px;
    background-color: var(--grey-3);
  }
  section {
    width: 100%;
  }
  @media (max-width: 768px) {
    display: grid;

    aside {
      margin-top: 0;
      position: sticky;
      top: 11.5%;

      height: fit-content;
    }
  }
`
export default DashboardLayout
