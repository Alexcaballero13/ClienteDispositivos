import { GET_VARIABLES } from "./action-types";

const initialState = {
    variables: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VARIABLES:
            if (state.variables.length > 0) return { ...state }
            return {
                ...state,
                variables: action.payload,
            }

        default:
            return { ...state };
    }

}

export default reducer