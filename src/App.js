import React from 'react'
import gql from 'graphql-tag'
import { Query, Mutation, Subscription } from 'react-apollo'

import './App.css'

// quote / slide

// << *To avoid doing context state management treat every data component as if it's a whole App* >>

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

const likePost = ({ postId }) => (
  gql`
    mutation {
      update_posts(where: {id: {_eq: ${postId.postId}}}, _inc: {likes: 1}) {
        affected_rows
      }
    }
  `
)

// mutations/index.js

const MUTATIONS = {
  posts: {
    like: likePost,
  }
}

// subscription/posts/likes.js

const updatePostSub = ({ postId }) => {
  return gql`
    subscription {
      posts(where: {id: {_eq: ${postId.postId}}}) {
        id
        likes
      }
    }
  `
}
// const updatePost = updatePostSub // TODO: remove updatePostSub

const SUBSCRIPTIONS = {
  posts: {
    update: updatePostSub,
  }
}

// lib end


// main component (app)

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

// post list

const PostList = ({ posts }) => (
  <div className="posts">
    {posts && posts.map((post) => (
      <div key={post.id} className="post">
        {post.title}
        <CommentsList comments={post.comments} />
        <LikeButton postId={{ postId: post.id }} />
        <LikesCount postId={{ postId: post.id }} />
      </div>
    ))}
  </div>
)

// post comments

const CommentsList = ({ comments }) => (
  <ul>
    {comments && comments.map((comment) => (
      <li key={comment.id} className="comment">
        {comment.text}
      </li>
    ))}
  </ul>
)


// APP ends

// Update (via mutation - result could be here) - to avoid local state management you treat every component as its own app

const LikeButton = ({ postId }) => {
  return (
    <Mutation mutation={MUTATIONS.posts.like({ postId })} >
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

// graphql subscription - react (rendering)

// each subscription does a separate query so we can avoid having any application state

const LikesCount = ({ postId }) => {
  return (<Subscription
    subscription={SUBSCRIPTIONS.posts.update({ postId })}
  >
    {({ data }) => {
      if (!data) return ""
      const { posts } = data
      const { likes } = posts[0]
      return (
        <span className="likes">({ likes })</span>
      )
    }}
  </Subscription>)
}



// extra

export default App
