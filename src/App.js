import React from 'react'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'

import './App.css'

const GET_POSTS = gql`
{
  posts {
    id
    title
    description
    likes
    comments {
      text
      id
    }
  }
}
`

const LIKE_POST = gql`

  mutation($id: ID!) {
    update_posts(input: { starrableId: $id }, _inc: {likes: 1})
  }

`;

const App = () => (
  <Query query={GET_POSTS}>
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

const PostList = ({ posts }) => (
  <div className="posts">
    {posts && posts.map((post) => (
      <div key={post.id} className="post">
        {post.title}
        <CommentsList comments={post.comments} />
        <a className="likeBtn">👍</a>
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
