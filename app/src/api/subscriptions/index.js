import postLikes from './posts/likes'

const subscriptions = {
  posts: {
    update: postLikes,
  }
}

export default subscriptions
