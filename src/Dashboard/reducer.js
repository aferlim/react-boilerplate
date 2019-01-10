export default (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return { ...state, isloading: true }

    case 'GET_TODOS_SUCCESS':
      return {
        ...state,
        todos: action.payload.data,
        isloading: false
      }
    case 'GET_TODOS_FAIL':
      return { ...state, isLoading: false, error: action.error }
    default:
      return { ...state }
  }
}
