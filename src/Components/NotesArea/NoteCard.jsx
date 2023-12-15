// Import React and styles
import React from 'react'
import styles from '../css/NoteCard.module.scss'

// Define the NoteCard component
export default function NoteCard({
    content,
    date,
    time,
}) {
    // Render the component with note content, date, and time
    return (
        <div className={styles.noteCard}>
            {/* Display the content of the note */}
            <p>{content}</p>

            {/* Display the date and time of the note */}
            <div className={styles.dateTime}>
                <p>{date}&nbsp; <span>&#8226;</span> &nbsp;{time}</p>
            </div>
        </div>
    )
}
