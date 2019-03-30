import React from 'react'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'

import './App.css'

// queries/posts.js

const postsAll = gql`
  {
    posts {
      id
      title
      description
      likes
      comments { text id }
    }
  }
`
// queries/index.js

const QUERIES = {
  posts: {
    all: postsAll,
  },
}

// mutations/index.js

const likePost = (postId) => {
  return gql`
    mutation {
      update_posts(where: {id: {_eq: ${postId}}}, _inc: {likes: 1}) {
        affected_rows
      }
    }
  `
}

// mutations/index.js

const MUTATIONS = {
  posts: {
    like: likePost,
  }
}

const postsAll = gql`
  mutation {
    update_posts(where: {id: {_eq: ${postId}}}, _inc: {likes: 1}) {
      affected_rows
    }
  }
`

updatePostSub
subscription {
  posts {
    likes
  }
}
const SUBSCRIPTIONS = {
  posts: {
    update: updatePostSub,
  }
}

const App = () => (
  <Query query={QUERIES.posts.all}>
    {({ data: { posts }, loading }) => {
      if (loading || !posts) {
        return (<div>Loading ...</div>)
      }
      return (
        <div>
          <PostList posts={posts} />
        </div>
      )
    }}
  </Query>
)

const LikeButton = ({ postId }) => {
  // const input = { id: "${postId[0]}" }
  // variables={ input}
  // <Mutation mutation={MUTATIONS.posts.like} >
  return (
    <Mutation mutation={MUTATIONS.posts.like(postId.postId)} >
      {(likePost, { data }) => (
        <div>
          <button
            className="likeBtn"
            onClick={e => {
              likePost()
            }}
          >
            <span role="img" aria-label="thumbsup">👍</span>
          </button>
        </div>
      )}
    </Mutation>
  )
}

const PostList = ({ posts }) => (
  <div className="posts">
    {posts && posts.map((post) => (
      <div key={post.id} className="post">
        {post.title}
        <CommentsList comments={post.comments} />
        <LikeButton postId={{ postId: post.id }} />
        <span className="likes">({post.likes})</span>
      </div>
    ))}
  </div>
)

const CommentsList = ({ comments }) => (
  <ul>
    {comments && comments.map((comment) => (
      <li key={comment.id} className="comment">
        {comment.text}
      </li>
    ))}
  </ul>
)

export default App
