import React from 'react'
import GroupHandler from '../Components/GroupHandler/GroupHandler'
import NotesArea from '../Components/NotesArea/NoteArea'

// NotesPage component that renders GroupHandler with NotesArea
function NotesPage() {
  return (
    <GroupHandler>
      <NotesArea />
    </GroupHandler>
  )
}

export default NotesPage
