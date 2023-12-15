// Import necessary dependencies and styles
import React from 'react'
import background from '../../assets/Banner.png' // Importing the background image
import Lock from '../../assets/Lock' // Importing the Lock icon component
import styles from '../css/Background.module.scss' // Importing styles from a module
import { useWidth } from '../../Context/WidthContext' // Importing a custom hook for getting screen width

// Define the Background component
function Background() {
  // Get the screen width using a custom hook
  const screenWidth = useWidth();

  // Render the component
  return (
    <div className={`${styles.bannerImage} ${screenWidth < 675 ? "remove" : ""}`}>
      {/* Main content container */}
      <div className={styles.centerContent}>
        {/* Background image */}
        <img src={background} alt="Background" />

        {/* Heading */}
        <h3>Pocket Notes</h3>

        {/* Description */}
        <p>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      </div>

      {/* Encryption information */}
      <div className={styles.encryptionText}>
        {/* Lock icon with encryption text */}
        <span><Lock /> end-to-end encrypted</span>
      </div>
    </div>
  )
}

// Export the Background component
export default Background
