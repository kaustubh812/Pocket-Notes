import React from 'react'
import GroupHandler from '../Components/GroupHandler/GroupHandler'
import Background from '../Components/Background/Background'

// HomePage component that renders GroupHandler with Background
function HomePage() {
  return (
    <GroupHandler>
      <Background />
    </GroupHandler>
  )
}

export default HomePage
