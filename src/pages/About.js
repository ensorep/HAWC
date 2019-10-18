import React from  'react';
import Header from '../components/Header';
import {graphql} from 'gatsby';

export const query = graphql`
    query newQuery{
    sanityAbout{
      title
      tagline
      _rawContent
    }
  }
`

export default ({data}) => (
    <div id="app">
    <Header/>
    <h2>{data.sanityAbout.title}</h2>
    <h3>{data.sanityAbout.tagline}</h3>
    {/*   <p>{data.sanityAbout._rawContent}</p> */}
  </div>
)
