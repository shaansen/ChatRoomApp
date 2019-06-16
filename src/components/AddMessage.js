import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMessage } from "../actions";

const AddMessage = props => {
  let input;
  const { addMessage } = props;
  return (
    <section id="new-message">
      <h3>Type New Message</h3>
      <span>
        <input
          onKeyPress={e => {
            if (e.key === "Enter") {
              addMessage(input.value, "Me");
              input.value = "";
            }
          }}
          type="text"
          placeholder="Press Enter to Send"
          ref={node => {
            input = node;
          }}
        />
      </span>
    </section>
  );
};

AddMessage.PropTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(
  null,
  { addMessage }
)(AddMessage);
