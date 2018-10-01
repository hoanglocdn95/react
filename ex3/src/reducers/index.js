import { TypeAction } from '../actions';

const initialState = [
    {
        id: 1,
        value: 'Akira Ichinose',
        displayList: true
    },
    {
        id: 2,
        value: 'Sora Aoi',
        displayList: true
    },
    {
        id: 3,
        value: 'Yui Hatano',
        displayList: true
    },
    {
        id: 4,
        value: 'Pham Van Chien',
        displayList: true
    },
    {
        id: 5,
        value: 'Ho Minh Huy',
        displayList: true,
    },
];
const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case TypeAction.DELETE_LIST :
            state.splice(action.id, 1);
            return [...state]
        case TypeAction.ADD_LIST :
            let obj = { id: state.length+1,
                        value: action.value,
                        displayList: true};
            state.push(obj);
            return [...state]
        case TypeAction.SAVE_LIST :
            state.map(arr => {
                if(arr.id === action.id){
                    state[action.id].value = action.value;
                    state[action.id].displayList = !state.displayList;
                }
            })
            return [...state];
        case TypeAction.EDIT_LIST :
            state.map(arr => {
                if(arr.id === action.id){
                    if(action.displayList === true){
                        action.displayList = false;
                    } else {
                        action.displayList = true;
                    }
                    state[action.id].displayList =action.displayList;
                    console.log('action: '+action.id+'---'+action.displayList );
                    console.log('state: '+state.id+'---'+state.displayList );
                    console.log(state);
                }
            })
            return [...state]
        default:
            return state;
    }
}

export default reducer;
