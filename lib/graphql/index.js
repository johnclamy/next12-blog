import { request } from 'graphql-request';
import getPostsQry from './queries/getPostsQry';
import getRecentPostsQry from './queries/getRecentPostsQry';
import getSimilarPostsQry from './queries/getSimilarPostsQry';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export async function getPosts() {
  const rslt = await request(graphqlAPI, getPostsQry);

  return rslt.postsConnection.edges
}

export async function getRecentPosts() {
  const rslt = await request(graphqlAPI, getRecentPostsQry)

  return rslt.posts
}

export async function getSimilarPosts(categories, slug) {
  const rslt = await request(graphqlAPI, getSimilarPostsQry, { slug, categories })

  return rslt.posts
}
