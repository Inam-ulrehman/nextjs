import styled from 'styled-components'

export const LandingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;

  @media (max-width: 820px) {
    min-height: auto;
    grid-template-columns: 1fr;

    .text-box {
      padding: 1rem;
    }
    .image-box {
      text-align: center;
    }
  }
  @media (min-width: 620px) {
    .mobile-image {
      display: none;
    }
  }
  @media (max-width: 620px) {
    text-align: center;
    width: 100vw;
    overflow: hidden;
    .mobile-image {
      width: 100vw;
      overflow: hidden;
      img {
        min-width: 95vw;
        height: auto;
      }
    }
    .text-box {
      padding-left: 0rem !important;
      .first-heading {
        padding: 1rem;
        margin: 0;
      }
      .second-heading {
        display: none;
        margin: 0px;
      }
      p {
        padding: 1rem;
        margin: 0;
      }
    }
    .image-box {
      display: none;
    }
  }
  .box {
  }
  .text-box {
    padding-left: 3rem;
    .first-heading {
      font-size: var(--medium);
      color: var(--primary-5);
      font-weight: 800;
    }
    .second-heading {
      font-weight: 700;
      color: var(--primary-8);
    }
    p {
    }
    .btn {
      transition: var(--transition);

      :hover {
        margin-top: 0px;
      }
    }
    .first-heading,
    .second-heading,
    p,
    a {
      margin-left: 0;
    }
  }
`
