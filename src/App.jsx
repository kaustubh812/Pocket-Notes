import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NotesPage from './Pages/NotesPage'
import { useWidth } from './Context/WidthContext'
import './App.css'

// Main App component
function App() {
  // Get the screen width using the useWidth custom hook
  const screenWidth = useWidth();

  // Display an error message for screens between 675 and 1085 pixels
  if (screenWidth >= 675 && screenWidth < 1085) {
    return (
      <div className='screen-error'>
        Pocket Notes is not available for this screen size.
      </div>
    );
  }

  // Render the application routes
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/NotesPage/:groupId' element={<NotesPage />} />
    </Routes>
  )
}

export default App
