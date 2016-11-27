import React from 'react'
import MainSection from './MainSection'
import CreateEntryForm from './CreateEntryForm'

export default function App() {
  return (
    <div>
      <div className="container">
        <h1>Budget App</h1>
        <MainSection />
        <CreateEntryForm />
      </div>
    </div>
  )
}
