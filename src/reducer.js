const initialState = {
    loading: false,
    menuOpen: false,
    choices: [
      { "src": "images/avatar1.png", "label": "Avatar 1", "id": 1 },
      { "src": "images/avatar2.png", "label": "Avatar 2", "id": 2 },
      { "src": "images/avatar3.png", "label": "Avatar 3", "id": 3 },
      { "src": "images/avatar4.png", "label": "Avatar 4", "id": 4 },
      { "src": "images/avatar5.png", "label": "Avatar 5", "id": 5 },
      { "src": "images/avatar6.png", "label": "Avatar 6", "id": 6 }
     ],
     current: { "src": "images/avatar1.png", "label": "Avatar 1", "id": 1 }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "TOGGLE_MENU": {
            return {
                ...state,
                menuOpen: !state.menuOpen
            }
        }
        case "CHANGE_AVATAR_REQUEST": {
            return {
                ...state,
                loading: true
            }
        }
        case "CHANGE_AVATAR_SUCCESS": {
            return {
                ...state,
                loading: false,
                current: action.payload,
                menuOpen: false,
            }
        }
        default: {
            return state;
        }
    }
}
