import {PRINTNAME} from '../constants/index';

const initial = {
            name:"Amit Raina"
}

const rootReducer = (state = initial , action) => {

    switch(action.type){
        case PRINTNAME : return {}
        default : return { ...state}
    }
}

export default rootReducer;