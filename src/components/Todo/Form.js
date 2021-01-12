import React, { useState } from 'react';
import { connect } from 'react-redux';

import { add } from './state';

function Form(props) {
  const [task, setTask] = useState('');
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send task to redux
    props.add({id: 5, name: task});
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="task" onChange={handleChange} />
      <input type="submit" />
    </form>
  );
}

// mapStateToProps
// mapDispatchToPros

const mapDispatchToPros = {
  add,
}

export default connect(
  null,
  mapDispatchToPros
)(Form);
