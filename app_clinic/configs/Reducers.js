export const MyUserReducer = (current, action) => {
    switch (action.type) {
        case "login":
            return action.payload;
        case "logout":
            return null;
    }

    return current;
}
// export const MyUserReducer = (state, action) => {
//     switch (action.type) {
//       case 'login':
//         return { ...state, user: action.payload.user, accessToken: action.payload.accessToken };
//       case 'logout':
//         return { user: null, accessToken: null };
//       default:
//         return state;
//     }
//   };