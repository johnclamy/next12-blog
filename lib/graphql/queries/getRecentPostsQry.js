import { gql } from "graphql-request";

const getRecentPostsQry = gql`
  query GetPostDetails() {
    posts(
      orderBy: createdAt_ASC
      last: 3
    ) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
}`;

export default getRecentPostsQry
