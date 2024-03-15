import { useDispatch } from "react-redux"
import { reactionAdded } from "./postsSlice";

const ReactionButtons = ({ postId, reactions }) => {
  const dispatch = useDispatch();

  const reactionEmojis = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
  }

  const reactionButtons = Object.entries(reactionEmojis).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        onClick={() => dispatch(reactionAdded({ postId, reaction: name }))}
        >
      {emoji} {reactions[name]}
      </button>
    )
  })

  return (
    <>
      {reactionButtons}
    </>
  )
}

export default ReactionButtons;