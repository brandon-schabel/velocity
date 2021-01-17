import { useState, useEffect } from 'react'

interface IUseParamState {
  initialState: number | string | object
  queryParamKey: string
}

export const useParamState = (
  initialState: number | string | object,
  queryParamKey: string
) => {
  const urlParams = new URLSearchParams()

  const [paramState, setParamState] = useState(initialState)

  const setUrl = () => {
    if (window && window.history) {
      window.history.pushState(null, null, '?' + urlParams.toString())
    }
  }

  const handleSetState = (newValue: string) => {
    urlParams.set(queryParamKey, newValue)
    setParamState(newValue)

    setUrl()
  }

  useEffect(() => {
    let paramValue = null

    if (window && window.location) {
      paramValue = new URLSearchParams(window.location.search).get(
        queryParamKey
      )
    }

    if (paramValue) {
      urlParams.set(queryParamKey, paramValue)
      setUrl()
      setParamState(paramValue)
    }
  }, [])

  return [paramState, handleSetState]
}
