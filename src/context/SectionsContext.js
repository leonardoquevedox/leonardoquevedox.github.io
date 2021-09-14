import React, { useCallback, useState, useEffect, createContext, useContext } from 'react'

import PropTypes from 'prop-types'

let openingTimeoutRef = null

export const SectionsContext = createContext({})

export const SectionsContextProvider = ({ children }) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const [hasTimeout, setHasTimeout] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [article, setSection] = useState('')
  const [loading, setLoading] = useState('is-loading')
  const [wrapperRef, setWrapperRef] = useState(null)

  const toggleSection = useCallback(() => {
    setIsSectionVisible(!isSectionVisible)
    setHasTimeout(!hasTimeout)
    setIsVisible(!isVisible)
  }, [isVisible, hasTimeout, isSectionVisible])

  const handleOpenSection = useCallback(
    (selectedSection) => {
      toggleSection()
      setSection(selectedSection)
    },
    [toggleSection],
  )

  const handleCloseSection = useCallback(() => {
    toggleSection()
    setSection('')
  }, [toggleSection])

  const handleOutsideClick = useCallback(
    (event) => {
      if (wrapperRef && !wrapperRef.contains(event.target) && isSectionVisible) handleCloseSection()
    },
    [isSectionVisible, wrapperRef, handleCloseSection],
  )

  useEffect(() => {
    openingTimeoutRef = setTimeout(() => {
      setLoading('')
    }, 100)

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      if (openingTimeoutRef) clearTimeout(openingTimeoutRef)
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [handleOutsideClick])

  const values = {
    isSectionVisible,
    setIsSectionVisible,
    hasTimeout,
    setHasTimeout,
    isVisible,
    setIsVisible,
    article,
    setSection,
    loading,
    setLoading,
    wrapperRef,
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
