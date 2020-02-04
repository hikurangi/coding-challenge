import React                        from 'react'
import { connect }                  from 'react-redux'
import {
  changeAvatar,
  closeMenu,
  toggleMenu
}                                   from './actions'
import Popover                      from './Popover'

const AvatarPicker = ({
  choices,
  closeMenu,
  current,
  menuOpen,
  selectAvatar,
  toggleMenu
  // ...props
}) => {
  return (
    <div>
      <img
        className="avatar"
        onClick={toggleMenu}
        src={current.src}
        alt={current.alt}
      />
      {menuOpen && (
        <Popover
          choices={choices}
          current={current}
          closeMenu={closeMenu}
          selectAvatar={selectAvatar}
        />
      )}
    </div>
  )
}

const mapStateToProps = state => state

const mapActionsToProps = dispatch => ({
  selectAvatar: avatar => dispatch(changeAvatar(avatar)),
  toggleMenu: () => dispatch(toggleMenu()),
  closeMenu: () => dispatch(closeMenu())
})

export default connect(mapStateToProps, mapActionsToProps)(AvatarPicker)
