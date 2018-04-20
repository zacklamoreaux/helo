import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export function Nav() {
  return (
    <div>
      <Link to='/dashboard'>
        <button>Home</button>
      </Link>
      <Link to='/post'>
      <button>New Post</button>
      </Link>
      <Link to ='/auth'>
      <button>Logout</button>
      </Link>
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