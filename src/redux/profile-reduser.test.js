import profileReduser, {addPostActionCreator, deletePost} from './profile-reduser';


let state = {
    posts: [
        {id: '1', message: 'hi', like: '3'},
        {id: '2', message: 'how are you', like: '5'}
      ]
}

it('lenght of posts shold be incremented', () => {
    let action = addPostActionCreator('test');
    let newState = profileReduser(state, action);

    expect(newState.posts.length).toBe(3);
});

it('message of new posts shold be test', () => {
    let action = addPostActionCreator('test');
    let newState = profileReduser(state, action);

    expect(newState.posts[2].message).toBe('test');
});

it('after deleting, lenght shouldnt be decrement if id incorrect', () => {
    let action = deletePost('1');
    let newState = profileReduser(state, action);

    expect(newState.posts.length).toBe(1);
});

it('after deleting, lenght of posts shold be decrement', () => {
    let action = deletePost('4');
    let newState = profileReduser(state, action);

    expect(newState.posts.length).toBe(2);
});