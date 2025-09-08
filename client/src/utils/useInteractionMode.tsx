import { useEffect, useState } from "react"

type InteractionMode = 'mouse' | 'touch'

interface ExtendedNavigator extends Navigator {
  msMaxTouchPoints?: number
}

const useInteractionMode = (): InteractionMode => {
  const [mode, setMode] = useState<InteractionMode>('mouse')

  useEffect(() => {
    const detectInitialMode = (): InteractionMode => {
      const extendedNavigator = navigator as ExtendedNavigator
      
      const hasTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (extendedNavigator.msMaxTouchPoints !== undefined && extendedNavigator.msMaxTouchPoints > 0)

      const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches

      if (hasCoarsePointer || hasTouch) {
        return 'touch'
      }

      return 'mouse'
    }

    setMode(detectInitialMode())

    const handleFirstTouch = (): void => {
      setMode('touch')
      document.removeEventListener('mousemove', handleFirstMouse)
    }

    const handleFirstMouse = (e: MouseEvent): void => {
      if (e.movementX !== 0 || e.movementY !== 0) {
        setMode('mouse')
        document.removeEventListener('touchstart', handleFirstTouch)
      }
    }

    const pointerQuery = window.matchMedia('(pointer: coarse)')
    const handlePointerChange = (e: MediaQueryListEvent): void => {
      setMode(e.matches ? 'touch' : 'mouse')
    }

    document.addEventListener('touchstart', handleFirstTouch, { passive: true })
    document.addEventListener('mousemove', handleFirstMouse, { passive: true })
    pointerQuery.addEventListener('change', handlePointerChange)

    return () => {
      document.removeEventListener('touchstart', handleFirstTouch)
      document.removeEventListener('mousemove', handleFirstMouse)
      pointerQuery.removeEventListener('change', handlePointerChange)
    }
  }, [])

  return mode
}

export default useInteractionMode