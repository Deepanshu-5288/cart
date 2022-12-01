export const reducer = (state,action) =>{
    if(action.type === "LOADING"){
        return {...state, loading:true}
    }
    if(action.type === "DISPLAY_ITEMS"){
        return {...state, cardItems:action.payload, loading:false}
    }
    if(action.type === "CLEAR_CART"){
        return { ...state, cardItems:[]}
    }
    if(action.type === "REMOVE_ITEM"){
        return {...state, cardItems: state.cardItems.filter((item) => item.id !== action.payload)}
    }
    if(action.type==="INCREASE"){
        let tempCart = state.cardItems.map((item) => {
            if(item.id === action.payload){
                
                 return {...item, amount:item.amount+1}
            }
            return {...item}
        })
        return {...state, cardItems:tempCart}
    }
    if(action.type==="DECREASE"){
        let tempCart = state.cardItems.map((item) => {
            if(item.id === action.payload){
                
                return {...item, amount:item.amount-1}
            }
            return {...item}
        }).filter((item) => item.amount !==0)
        return {...state, cardItems:tempCart}
    }
    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.cardItems.reduce(
          (cartTotal, cartItem) => {
            const { price, amount } = cartItem
            const itemTotal = price * amount
    
            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
          },
          {
            total: 0,
            amount: 0,
          }
        )
        total = parseFloat(total.toFixed(2))
    
        return { ...state, total, amount }
      }
}