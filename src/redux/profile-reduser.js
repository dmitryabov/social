const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: '1', message: 'hi', like: '3'},
        {id: '2', message: 'how are you', like: 5}
      ],
    newPostText: '',
}

const profileReduser = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            const newPost = {
                id: '3', 
                message: state.newPostText, 
                like: '3'
             };
             state.posts.push(newPost);
             state.newPostText = '';
             return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.postText;
            return state
        default: 
         return state
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
  
export const updatePostActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, postText: text}
}

export default profileReduser; 