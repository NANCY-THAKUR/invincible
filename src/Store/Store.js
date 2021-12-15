import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootreducer from '../Reducer'




const persistedSate= localStorage.getItem('reduxStore')?JSON.parse(localStorage.getItem('reduxStore')):{};

const composeEnhancers= compose; 


const enhancer=composeEnhancers(
    applyMiddleware(thunk),
)


const store=createStore(
    rootreducer,persistedSate,enhancer
);
export default store;
