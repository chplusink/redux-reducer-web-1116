export function managePresents(state, action){
  if ( action.type === 'INCREASE') {
    let presents = state.numberOfPresents + 1
    return { numberOfPresents: presents }
  } else {
    return state
  }
}
