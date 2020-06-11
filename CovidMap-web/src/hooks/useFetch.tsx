import { useReducer, useEffect } from 'react';
import useIsMounted from './useIsMounted';

interface State {
    data: Array<any>
    isLoading: boolean
    isError: boolean
}

interface Action {
    type: string
    payload?: any
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
    case 'FETCH_SUCCESS':
        return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload
        }
    case 'FETCH_FAILURE':
        return {
            ...state,
            isLoading: false,
            isError: true
        }
    default:
        throw new Error()
    }
}

const useFetch = (url: string, defaultState: Array<any> = []) => {

    const isMounted = useIsMounted()
    const [state, dispatch] = useReducer(reducer, {
        data: defaultState,
        isLoading: true,
        isError: false
    })

    useEffect(() => {

        const controller = new AbortController()
        const fetchData = async () => {

            try {

                const response = await fetch(url, { signal: controller.signal })
                const data = await response.json()
                if (isMounted.current) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: data })
                }

            } catch (error) {
                if (isMounted.current) {
                    dispatch({ type: 'FETCH_FAILURE' })
                }
            }
        }

        fetchData()
        return () => {
            controller.abort()
        }

    }, [url, isMounted])

    return { state }
}

export default useFetch
