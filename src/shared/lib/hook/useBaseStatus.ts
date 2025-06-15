import { useState } from "react"
import { Status } from "@/shared/types/ui"

export const useBaseStatus = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const onBaseStatusChange = (status: Status) => {
    switch (status) {
      case 'error':
        setIsError(true)
        setIsLoading(false)
        setIsSuccess(false)
        break
      case 'loading':
        setIsLoading(true)
        setIsError(false)
        setIsSuccess(false)
        break
      case 'success':
        setIsError(false)
        setIsLoading(false)
        setIsSuccess(true)
        break
    }
  }

  return {
    isLoading,
    isError,
    isSuccess,
    onBaseStatusChange
  }
}
