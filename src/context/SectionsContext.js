import React, { useCallback, useState, useEffect, createContext, useContext } from 'react'

import PropTypes from 'prop-types'

let openingTimeoutRef = null

export const SectionsContext = createContext({})

export const SectionsContextProvider = ({ children }) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const [hasTimeout, setHasTimeout] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [currentSection, setCurrentSection] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [wrapperRef, setWrapperRef] = useState(null)

  const toggleSection = useCallback(() => {
    setIsSectionVisible(!isSectionVisible)
    setHasTimeout(!hasTimeout)
    setIsVisible(!isVisible)
  }, [isVisible, hasTimeout, isSectionVisible])

  const handleOpenSection = useCallback(
    (selectedSection) => {
      toggleSection()
      setCurrentSection(selectedSection)
    },
    [toggleSection],
  )

  const handleCloseSection = useCallback(() => {
    toggleSection()
    setCurrentSection('')
  }, [toggleSection])

  const handleOutsideClick = useCallback(
    (event) => {
      if (wrapperRef && !wrapperRef.contains(event.target) && isSectionVisible) handleCloseSection()
    },
    [isSectionVisible, wrapperRef, handleCloseSection],
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
    hasTimeout,
    isVisible,
    currentSection,
    isLoading,
    isSectionVisible,
    setWrapperRef,
    handleCloseSection,
    handleOpenSection,
  }

  return <SectionsContext.Provider value={values}>{children}</SectionsContext.Provider>
}

SectionsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useSectionsContext = () => {
  const context = useContext(SectionsContext)

  if (!context) throw new Error('useCmsProvider must be used within an CmsProvider.')

  return context
}
