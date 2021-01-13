//Create initialState
const initialState = {
    //state items to share go here
    user: {}
}

//Variables for action types avoid silent errors
const GET_USER = 'GET_USER';

//action builders contain the information for the reducer function to change state
export function getUser(userObj){
    //return action object
    return {
        //action always contains a type property and a payload propery
        type: GET_USER,
        payload: userObj
    }
}

//Reducer function is the control center of the reducer file. It is what actually changes state, based on information recieved from action builders
export default function reducer(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_USER:
            return {...state, user: payload};
        default:
            return state;
    }
}

// {
//     user: {
//         username: 'Ash Ketchum',
//         age: 10,
//         email: 'theverybest@pokemail.com'
//     }
// }