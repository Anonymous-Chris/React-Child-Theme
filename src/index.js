const { render } = wp.element;

import Test from './components/test/index';
import Test1 from './components/test1/index';

const App = () => {
    return ( 
    <div>
        <h1>hello i am index</h1>
        <Test/>
        <h3>----------------</h3>
        <Test1/>
    </div>
    );
};
render( <App/> , document.getElementById(`react-app`));