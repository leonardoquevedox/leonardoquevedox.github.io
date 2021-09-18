const React = require('react')
const { SectionsContextProvider } = require('./src/context/SectionsContext')

exports.wrapPageElement = ({ element, props }) => (
  <SectionsContextProvider {...props}>{element}</SectionsContextProvider>
)
