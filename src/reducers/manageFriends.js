export function manageFriends(state, action){
  if ( action.type === 'ADD_FRIEND' ) {
    let newFriends = [ ...state.friends, action.payload ]
    return { ...state, friends: newFriends }
  } else if ( action.type === 'REMOVE_FRIEND' ) {
    let newFriends = state.friends.filter( function(friend) {
      return friend.id !== action.payload
    })
    return { ...state, friends: newFriends }
  } else {
    return state
  }
}
