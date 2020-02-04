import avatar1           from './images/avatar1.png'
import avatar2           from './images/avatar2.png'
import avatar3           from './images/avatar3.png'
import avatar4           from './images/avatar4.png'
import avatar5           from './images/avatar5.png'
import avatar6           from './images/avatar6.png'
import avatarPlaceholder from './images/avatar-placeholder.png'

// TODO: decent descriptive alt text for avatars
const initialState = {
  loading: false,
  menuOpen: false,
  choices: [
    {
      src: avatar1,
      label: 'Avatar 1',
      alt: 'Avatar 1',
      id: 1,
    },
    {
      src: avatar2,
      label: 'Avatar 2',
      alt: 'Avatar 2',
      id: 2
    },
    {
      src: avatar3,
      label: 'Avatar 3',
      alt: 'Avatar 3',
      id: 3
    },
    {
      src: avatar4,
      label: 'Avatar 4',
      alt: 'Avatar 4',
      id: 4
    },
    {
      src: avatar5,
      label: 'Avatar 5',
      alt: 'Avatar 5',
      id: 5
    },
    {
      src: avatar6,
      label: 'Avatar 6',
      alt: 'Avatar 6',
      id: 6
    }
  ],
  current: {
    src: avatarPlaceholder,
    label: 'Avatar Placeholder',
    alt: 'Avatar Placeholder',
    id: 1 
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_MENU': {
      return {
        ...state,
        menuOpen: !state.menuOpen
      }
    }
    case 'CHANGE_AVATAR_REQUEST': {
      return {
        ...state,
        loading: true
      }
    }
    case 'CHANGE_AVATAR_SUCCESS': {
      return {
        ...state,
        loading: false,
        current: action.payload,
        menuOpen: false
      }
    }
    default: {
      return state
    }
  }
}
