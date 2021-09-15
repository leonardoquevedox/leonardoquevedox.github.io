import React from 'react'

import sections from 'config/sections'
import { useSectionsContext } from 'context/SectionsContext'

const Navbar = () => {
  const { handleSectionOpening } = useSectionsContext()

  return (
    <nav>
      <ul>
        {sections.map(
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
