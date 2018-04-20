import React from 'react'
import { connect } from 'react-redux'

export function Nav() {
  return (
    <div>
      <button>Home</button>
      <button>New Post</button>
      <button>Logout</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    username: state.username,
    profile_pic: state.profile_pic
  }
}

export default connect(mapStateToProps)(Nav)