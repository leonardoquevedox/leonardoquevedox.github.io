import React from 'react'

import { useSectionsContext } from 'context/SectionsContext'

import sections from 'config/sections'

const Navbar = () => {
  const { handleSectionOpening } = useSectionsContext()
  return (
    <nav>
      <ul>
        {Object.values(sections).map(
          (section) =>
            section && (
              <li key={section.href}>
                <button
                  onClick={() => {
                    handleSectionOpening(section.href)
                  }}
                >
                  {section.label}
                </button>
              </li>
            ),
        )}
      </ul>
    </nav>
  )
}

export default Navbar
