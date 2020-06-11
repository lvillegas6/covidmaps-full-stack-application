import {
    FETCH_DATA_SUCCESS,
    FETCH_DATA_REQUEST,
    FETCH_DATA_FAILURE,
    FILTER_DATA
} from './dataType'

export const fetchData = () => {
    return async (dispatch: any) => {
        dispatch(fetchDataRequest())
        try {
            const [departmentsRequest, municipalitiesRequest, statusRequest, casesRequest] = await Promise.all([
                fetch('https://api.covidmaps.media/departments'),
                fetch('https://api.covidmaps.media/municipalities'),
                fetch('https://api.covidmaps.media/status'),
                fetch('https://api.covidmaps.media/')
            ])
            const [departments, municipalities, status, cases] = await Promise.all([
                departmentsRequest.json(),
                municipalitiesRequest.json(),
                statusRequest.json(),
                casesRequest.json()
            ])
            dispatch(fetchDataSuccess({ departments, municipalities, status, cases }))
        } catch (error) {
            dispatch(fetchDataFailure(error.message))
        }
    }
}

export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = (data: any) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchDataFailure = (error: string) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}
export const filterData = (department: any) => {
    return {
        type: FILTER_DATA,
        payload: department
    }
}
