import React from 'react'
import styled from 'styled-components'
import DashboardSidebar from './Dashboard-Sidebar'
import { useSelector } from 'react-redux'
const DashboardLayout = ({ children }) => {
  const { dashboardSidebar } = useSelector((state) => state.global)

  return (
    <Wrapper showDashboardSidebar={dashboardSidebar}>
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
    min-width: ${(props) => (props.showDashboardSidebar ? '200px' : '50px')};
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
