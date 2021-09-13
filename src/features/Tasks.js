import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    hashTags: []
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addToBasket: (state,action)=>{
            state.tasks= [...state.tasks,action.payload];
            const newArray = action.payload.data.split(/((?:^|\s)(?:#[a-z\d-]+))/gi).filter(v => v.includes('#')).map(v =>
                v.replace(/\s/g,''));
            if(newArray.length !==0){
                state.hashTags = [...state.hashTags,{
                    id : action.payload.id,
                    hashArray: newArray
                }];
            }
        },
        removeFromBasket: (state,action)=>{
            var newBasket = state.tasks.filter(item => item.id !== action.payload);
            var newHashes = state.hashTags.filter(item => item.id !== action.payload);
            state.tasks = newBasket;
            state.hashTags = newHashes;
        }, 
        clearTasks : (state,action)=>{
            state.tasks = [];
        }
    }
});

export const { addToBasket, removeFromBasket, clearTasks} = taskSlice.actions;
export default taskSlice.reducer;