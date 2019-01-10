export const loadTodos = () => ({
  type: 'GET_TODOS',
  payload: {
    request: {
      method: 'get',
      url: '/todos'
    }
  }
})
