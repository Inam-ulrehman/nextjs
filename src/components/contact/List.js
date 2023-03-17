import React from 'react'
import styled from 'styled-components'

const List = ({ contacts }) => {
  return (
    <Wrapper>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Subject</td>
          <td>Time</td>
        </tr>
      </thead>
      <tbody>
        {contacts.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.subject}</td>
              <td>{item.createdAt}</td>
            </tr>
          )
        })}
      </tbody>
    </Wrapper>
  )
}

const Wrapper = styled.table`
  table-layout: fixed;
`
export default List
