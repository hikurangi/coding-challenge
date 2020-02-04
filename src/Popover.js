import React from 'react'

const Popover = ({
  choices,
  current,
  selectAvatar
}) => {

  // remove the current avatar
  const existingAvatars = choices.filter(choice => choice.id !== current.id)

  // keep the current avatar at the start
  const avatars = [current, ...existingAvatars]

  return (
    <div className="popover">
      <p className="popover-title">Choose your avatar</p>
      <section className="avatar-wrapper">
        {avatars.map(avatar => (
          <img
            key={avatar.id}
            className="avatar"
            onClick={() => selectAvatar(avatar)}
            src={avatar.src}
            alt={avatar.alt}
          />
        ))}
      </section>
    </div>
  )
}

export default Popover