export const PriceRecuder = (state=0, action) => {
    switch(action.type){
        case 'ADD':
            return state += action.payload ;
        case 'REMOVE':
            if(state>0){
                return state -= action.payload;
            }
            return state ;
        default:
            return state;
    }
}
