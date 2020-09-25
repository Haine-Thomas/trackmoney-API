export default (state, action) => {
    switch(action.type) {
      case 'GET_MEMBERS':
        return{
          ...state,
          loading:false,
          members: action.payload
        }
      case 'ADD_MEMBER':
        return {
          ...state,
          members: [ ...state.members, action.payload]
        }
        case 'MEMBER_ERROR':
          return {
            ...state,
            error: action.payload
          }
      default:
        return state;
    }
  }