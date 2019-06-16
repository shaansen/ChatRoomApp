import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Sidebar = ({ users }) => (
  <aside id="sidebar" className="sidebar">
    <h1>Active Users</h1>
    <hr />
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </aside>
);

Sidebar.PropTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Sidebar);
