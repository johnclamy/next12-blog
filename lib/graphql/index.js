import { request } from 'graphql-request';
import getPostsQry from './queries/getPostsQry';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export async function getPosts() {
  const rslt = await request(graphqlAPI, getPostsQry);

  return rslt.postsConnection.edges
}
