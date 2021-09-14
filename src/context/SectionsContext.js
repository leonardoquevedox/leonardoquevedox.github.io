import React, { useCallback, useState, useEffect, createContext, useContext } from 'react'

import PropTypes from 'prop-types'

let openingTimeoutRef = null

export const SectionsContext = createContext({})

export const SectionsContextProvider = ({ children }) => {
  const [isOpening, setIsOpening] = useState(false)
  const [currentSection, setCurrentSection] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [wrapperRef, setWrapperRef] = useState(null)

  const toggleSection = useCallback(() => {
    setIsOpening(!isOpening)
  }, [isOpening])

  const handleSectionOpening = useCallback((selectedSection) => {
    setCurrentSection(selectedSection)
  }, [])

  const handleSectionClosure = useCallback(() => {
    toggleSection()
    setCurrentSection('')
  }, [toggleSection])

  const handleOutsideClick = useCallback(
    (event) => {
      if (wrapperRef && !wrapperRef.contains(event.target)) handleSectionClosure()
    },
    [wrapperRef, handleSectionClosure],
  )

  useEffect(() => {
    openingTimeoutRef = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      if (openingTimeoutRef) clearTimeout(openingTimeoutRef)
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [handleOutsideClick])

  const values = {
    isOpening,
    currentSection,
    isLoading,
    setWrapperRef,
    handleSectionClosure,
    handleSectionOpening,
  }

  return <SectionsContext.Provider value={values}>{children}</SectionsContext.Provider>
}

SectionsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useSectionsContext = () => {
  const context = useContext(SectionsContext)
  if (!context) throw new Error('useSectionsContext must be used within an Provider.')
  return context
}
