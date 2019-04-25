import React from 'react'
import queries from '../../api/queries'
import { Query } from 'react-apollo'
import PostList from './post-list'
import Header from '../../ui/Header'

const Posts = () => (
  <>
    <Header />
    <Query query={queries.posts.all}>
      {({ data, loading }) => {
        if (!data) {
          return null
        }

        if (loading || !data.post) {
          return (<div className="loading">Loading ...</div>)
        }
        return (
          <div>
            <PostList posts={data.post} />
          </div>
        )
      }}
    </Query>
  </>
)

export default Posts
