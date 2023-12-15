// Import React, useState, styles, and the Send icon
import React, { useState } from 'react'
import styles from '../css/TypingArea.module.scss'
import Send from '../../assets/Send'

// Define the TypingArea component
export default function TypingArea({
    addNote,
}) {
    // State variable to manage the note content
    const [note, setNote] = useState("");

    // Function to handle the submission of a new note
    const handleSubmitNote = () => {
        // Get the current date and time
        const today = new Date();

        // Create a new note object with content, date, and time
        const newNote = {
            content: note,
            date: today.toLocaleDateString('en-US', { day: "numeric" }) + " " + today.toLocaleDateString('en-US', { month: "short", year: "numeric" }),
            time: new Date().toLocaleString('en-US', { hour: "numeric", minute: "2-digit" })
        }

        // Call the addNote function with the new note
        addNote(newNote);

        // Reset the note content after submission
        setNote("");
    }

    // Render the component
    return (
        <div className={styles.writingArea}>
            <div className={styles.inputContainer}>
                {/* Textarea for entering the note content */}
                <textarea name="note" id="note" value={note} onChange={(e) => setNote(e.target.value)} placeholder='Enter your text here......' />

                {/* Button to submit the note */}
                <div className={styles.saveNoteButton} style={{ pointerEvents: note.length > 0 ? "auto" : "none" }} onClick={handleSubmitNote}>
                    {/* Use the Send icon with conditional disabled state */}
                    <Send disabled={!(note.length > 0)} />
                </div>
            </div>
        </div>
    )
}
