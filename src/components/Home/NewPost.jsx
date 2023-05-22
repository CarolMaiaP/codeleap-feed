import '../../styles/newPost.scss'

export function NewPost(){
  return(
    <div className="new-post">
        <h2>What’s on your mind?</h2>
        <div className="new-post__form">
          <label className='new-post__form--title' htmlFor="title">Title</label>
          <input className='new-post__form--input' placeholder='Hello world' type="text" id="title" />
          <label className='new-post__form--title' htmlFor="content">Content</label>
          <textarea className='new-post__form--input' placeholder='Content here' name="content" id="content" cols="20" rows="10"></textarea>
          <div className="new-post__form--button">
            <button>Create</button>
          </div>
        </div>
      </div>
  )
  
}