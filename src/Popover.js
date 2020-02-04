import React, { useRef, useEffect } from 'react'

const Popover = ({
  choices,
  closeMenu,
  current,
  selectAvatar
}) => {

  function useOutsideClick (ref) {
    const handleClickOutside = evt => {
      if (ref.current && !ref.current.contains(evt.target)) {
        closeMenu()
      }
    }
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside)
    })
  }

  const popoverRef = useRef(null)
  useOutsideClick(popoverRef)

  // remove the current avatar
  const existingAvatars = choices.filter(choice => choice.id !== current.id)

  // keep the current avatar at the start
  const avatars = [current, ...existingAvatars]

  return (
    <div className="popover" ref={popoverRef}>
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