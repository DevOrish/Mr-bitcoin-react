import userService from '../../services/user.service'


const getLoggedInUser = () => {
    return async (dispatch) => {
        const user = await userService.getUser()
        return dispatch(getUser(user))
    }
}

const getUser = (user) => {
    return { type: 'SET_CURR_USER', user }
}

export default {
    getLoggedInUser,

}