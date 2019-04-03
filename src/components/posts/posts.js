import React from 'react'
import queries from '../../api/queries'
import { Query } from 'react-apollo'
import PostList from './post-list'

const Posts = ({ posts }) => (
  <Query query={queries.posts.all}>
    {({ data: { posts }, loading }) => {
      if (loading || !posts) {
        return (<div className="loading">Loading ...</div>)
      }
      return (
        <div>
          <PostList posts={posts} />
        </div>
      )
    }}
  </Query>
)

export default Posts
