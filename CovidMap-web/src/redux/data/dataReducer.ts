import {
    FETCH_DATA_SUCCESS,
    FETCH_DATA_REQUEST,
    FETCH_DATA_FAILURE,
    FILTER_DATA
} from './dataType'

const initialState = {
    loading: false,
    departments: [],
    municipalities: [],
    status: [],
    cases: [],
    selecDepartment: {},
    filterMunicipalities: [],
    error: ''
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
    case FETCH_DATA_REQUEST:
        return {
            ...state,
            loading: true
        }
    case FETCH_DATA_SUCCESS:
        return {
            loading: false,
            departments: action.payload.departments,
            selecDepartment: action.payload.departments[0],
            municipalities: action.payload.municipalities,
            status: action.payload.status,
            cases: action.payload.cases,
            filterMunicipalities: action.payload.municipalities.filter((element: any) => {
                return element.department === action.payload.departments[0]['id']
            }),
            error: ''
        }
    case FETCH_DATA_FAILURE:
        return {
            loading: false,
            data: [],
            error: action.payload
        }
    case FILTER_DATA:
        return {
            ...state,
            selecDepartment: action.payload,
            filterMunicipalities: state.municipalities.filter((element: any) => {
                return element.department === action.payload.id
            })
        }
    default: return state
    }
}

export default reducer
