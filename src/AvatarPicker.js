import React                        from 'react'
import { connect }                  from 'react-redux'
import { changeAvatar, toggleMenu } from './actions'
import Popover                      from './Popover'

const AvatarPicker = ({
  choices,
  current,
  menuOpen,
  toggleMenu,
  selectAvatar
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
          selectAvatar={selectAvatar}
        />
      )}
    </div>
  )
}

const mapStateToProps = state => state

const mapActionsToProps = dispatch => ({
  selectAvatar: avatar => dispatch(changeAvatar(avatar)),
  toggleMenu: () => dispatch(toggleMenu())
})

export default connect(mapStateToProps, mapActionsToProps)(AvatarPicker)
