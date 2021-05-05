
import {Redirect,Route} from 'react-router-dom'
import {useContext } from 'react' 
import AppContext from '../context/app-context'
export default function PublicRoute  ({component: Component, ...rest}) {
       const {isLogin} = useContext(AppContext);
    return (

        <Route {...rest} render={props => (
            isLogin ?
                <Component {...props} />
            : <Redirect to="/authentication" />
        )} />
    );
};
