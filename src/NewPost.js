import { useState } from 'react';

const NewPost = () => {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    return (
        <main>
            <form className="newPost__form">
                <div className="form-control">
                    <label htmlFor="newPost__form__title">Enter Post Title here</label>
                    <input 
                    type="text"
                    required
                    id="newPost__form__title"
                    placeholder="Enter Post Title" 
                    value={postTitle}
                    onChange={(e) => (setPostTitle(e.target.value))}/>
                </div>
                <div className="form-control">
                    <label htmlFor="newPost__form__body">Enter Post Body here</label>
                    <textarea 
                    type="text"
                    required
                    id="newPost__form__body"
                    placeholder="Enter Post Body" 
                    value={postBody}
                    onChange={(e) => (setPostBody(e.target.value))}/>
                </div>
            </form>
        </main>
    )
}

export default NewPost;