import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from './postsSlice'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const users = useSelector(state => state.users)
  const dispatch = useDispatch();

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onUserSelected = e => setUserId(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)

  return (
    <article>
      <form>
        <h2>Add post:</h2>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          placeHolder="What's on your mind?"
          id="addPost"
          name="addPost"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="content">Content:</label>
        <textarea
          id=""
          value={content}
          onChange={onContentChanged}
        />
        <select value={userId} onChange={onUserSelected}>
          <option value=""></option>
          {usersOptions}
        </select>
      </form>
      <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save post</button>
    </article>
  )
}

export default AddPostForm;