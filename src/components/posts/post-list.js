import React from 'react'
import CommentsList from './comments/comments-list'
import LikeButton from './likes/like-button'
import LikesCount from './likes/likes-count'

const PostList = ({ posts }) => (
  <div className="posts">
    <h2 className="title">GraphSQL Posts</h2>
    {posts && posts.map((post) => (
      <div key={post.id} className="post">
        <h4>{post.title}</h4>
        <CommentsList comments={post.comments} />
        <div className="social">
          <LikeButton postId={{ postId: post.id }} />
          <LikesCount postId={{ postId: post.id }} />
        </div>
      </div>
    ))}
  </div>
)

export default PostList
