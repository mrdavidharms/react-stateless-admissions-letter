import React from 'react';

const LetterForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <input type="text"
      placeholder="Adressee"
      value={props.handleChange} />
      <input type="submit" value="Approve" />
      <input type="submit" value="Reject" />
    </form>
  );
};

export default LetterForm;
