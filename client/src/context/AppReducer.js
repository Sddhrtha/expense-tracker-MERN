export const AppReducer =  (state, action) => {

    switch (action.type) {
        case 'GET_EXPENSES':
            return {
                ...state,
                loading: false,
                expenses: action.payload
            }

        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense._id !== action.payload )
            }

        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expense, action.payload]                
            }

        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'GET_INCOME_LIST':
            return {
                ...state,
                loading: false,
                incomeList: action.payload
            }

        case 'DELETE_INCOME':
            return {
                ...state,
                incomeList: state.incomeList.filter(incomeItem => incomeItem._id !== action.payload )
            }

        case 'ADD_INCOME':
            return {
                ...state,
                incomeList: [...state.incomeList, action.payload]                
            }
        
        case 'GET_SAVINGS':
            return {
                ...state,
                loading: false,
                savings: action.payload
            }

        case 'DELETE_SAVING':
            return {
                ...state,
                savings: state.incomeList.filter(incomeItem => incomeItem._id !== action.payload )
            }

        case 'ADD_SAVING':
            return {
                ...state,
                savings: [...state.incomeList, action.payload]                
            }

        default:
            return state;  
    }
    
}