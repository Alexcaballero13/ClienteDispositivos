import { GET_VARIABLES } from './action-types';
import axios from 'axios'


export const getAllVariables = () => {
    return async (dispatch) => {
        const response = await axios('http://localhost:3001/dispositivo/registro')
        return dispatch({ type: GET_VARIABLES, payload: response.data })
    }
}

