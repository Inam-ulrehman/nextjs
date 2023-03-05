import { Icons } from '@/styles/Icons'
import { servicesData } from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const ServicesDropdown = () => {
  return (
    <>
      {servicesData.map((item, index) => {
        return (
          <Wrapper key={index}>
            <Link href={`/services/${item.path}`}>
              <div className='menu'>
                <i style={{ color: item.color }}>{Icons[item.icon]}</i>
                <div className='span'>
                  <span style={{ color: item.color }} className='span-title'>
                    {item.title}
                  </span>
                  <span className='description'>{item.description}</span>
                </div>
              </div>
            </Link>
          </Wrapper>
        )
      })}
    </>
  )
}
const Wrapper = styled.li`
  background-color: var(--white);
  width: 400px !important;
  :hover {
  }
  .menu {
    display: flex;
    align-items: center;
    i {
      margin-right: 10px;
    }
    .span {
      display: grid;
      .span-title {
        font-weight: 600;
      }
      .description {
        font-size: var(--extra-small-text);
        max-width: 300px;
      }
    }
  }
`
export default ServicesDropdown
