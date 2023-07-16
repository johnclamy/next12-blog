import { gql } from 'graphql-request';

const getPostsQry = gql`query MyQuery {
  postsConnection {
    edges {
      cursor
      node {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
      }
    }
  }
}`;

export default getPostsQry