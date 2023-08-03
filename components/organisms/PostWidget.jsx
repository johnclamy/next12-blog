import { useState, useEffect } from "react"
import moment from "moment/moment"
import Link from "next/link"
import { getRecentPosts, getSimilarPosts } from "../../lib/graphql"

export default function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
      .then(rslt => setRelatedPosts(rslt))
    } else {
      getRecentPosts()
      .then(rslt => setRelatedPosts(rslt))
    }
  }, [slug])

  console.log(relatedPosts)

  return (
    <div>The Post widget component...</div>
  )
}