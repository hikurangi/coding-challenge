import React                        from 'react'
import { connect }                  from 'react-redux'

import { changeAvatar, toggleMenu } from './actions'
import Popover                      from './Popover'

const AvatarPicker = ({
  menuOpen,
  toggleMenu,
  ...props
}) => {
  return (
    <div>
      <div
        className="avatar"
        onClick={toggleMenu}
      >
      </div>
      {menuOpen && <Popover/>}
    </div>
  )
}

const mapStateToProps = state => state

const mapActionsToProps = dispatch => ({
  selectAvatar: avatar => dispatch(changeAvatar(avatar)),
  toggleMenu: () => dispatch(toggleMenu())
})

export default connect(mapStateToProps, mapActionsToProps)(AvatarPicker)
