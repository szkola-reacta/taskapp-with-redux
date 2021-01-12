const ADD = 'tasks/ADD';

export const add = (task) => ({ type: ADD, payload: task }); // { type: 'tasks/ADD', payload: {id: 5, text: 'Ala ma kota'} }

const INITIAL_STATE = {
  isLading: false,
  hasError: false,
  tasks: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, tasks: state.tasks.concat([action.payload]) };
    default:
      return state;
  }
}

export default reducer;

