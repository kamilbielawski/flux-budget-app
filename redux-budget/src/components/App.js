import React from 'react'
import Header from './Header'
import MainSection from './MainSection'
import CreateEntryForm from './CreateEntryForm'

export function App() {
  const entries = []

  return (
    <div>
      <div className="container">
        <Header />
        <MainSection />
        <CreateEntryForm />
      </div>
    </div>
  )
}

export default App


