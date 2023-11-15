import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVariables } from "../../redux/actions";

const Home = () => {

    const Dispatch = useDispatch();
    const variables = useSelector(state => state.variables)

    useEffect(() => {
        Dispatch(getAllVariables())
    }, [Dispatch])

    console.log(variables)
    return(
        <div>
            <h2>Esta seria la pagina HOME</h2>
        </div>
    )
}

export default Home