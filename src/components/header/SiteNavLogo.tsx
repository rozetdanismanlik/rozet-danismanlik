import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { css } from '@emotion/react';
import { getImage, getSrc, IGatsbyImageData } from 'gatsby-plugin-image';

import config from '../../website-config';

type SiteNavLogoProps = { logo: { childImageSharp: { gatsbyImageData: IGatsbyImageData } } };

export function SiteNavLogo() {
  const data: SiteNavLogoProps = useStaticQuery(graphql`
    query HeadingQuery {
      logo: file(relativePath: { eq: "img/logo.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 95, width: 400, layout: FIXED)
        }
      }
    }
  `);

  const logo = getImage(data.logo);

  return (
    <Link className="site-nav-logo" css={SiteNavLogoStyles} to="/">
      {logo ? (
        <img src={getSrc(logo)} alt={config.title} />
      ) : (
        config.title
      )}
    </Link>
  );
}

const SiteNavLogoStyles = css`
  position: relative;
  z-index: 100;
  flex-shrink: 0;
  display: inline-block;
  margin-right: 32px;
  padding: 12px 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-transform: none;

  :hover {
    text-decoration: none;
  }

  img {
    display: block;
    width: auto;
    height: 21px;
  }

  @media (max-width: 500px) {
    img {
      display: none;
    }
  }
`;

