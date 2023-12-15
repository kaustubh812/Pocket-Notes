// Import React, useEffect, useState, and components/styles
import React, { useEffect, useState } from 'react'
import styles from '../css/NoteArea.module.scss'
import GroupName from '../GroupArea/GroupName';
import BackArrow from '../../assets/BackArrow'
import NoteCard from './NoteCard';
import TypingArea from './TypingArea';
import { useParams, Link } from 'react-router-dom';
import { useWidth } from '../../Context/WidthContext'

// Define the NoteArea component
function NoteArea() {
    // State variables to manage notes, the selected group, and group error status
    const [notes, setNotes] = useState([]);
    const [group, setGroup] = useState(null);
    const [groupError, setGroupError] = useState(false);

    // Get the groupId from the URL parameters
    const { groupId } = useParams();

    // Get the screen width using a custom hook
    const screenWidth = useWidth();

    // Effect to fetch group and notes data from local storage when groupId changes
    useEffect(() => {
        // Reset group error status
        setGroupError(false);

        // Find the group with the given groupId in local storage
        const groupFound = JSON.parse(localStorage.getItem('groups')).find((group) => group.groupId === groupId);

        // Retrieve notes for the current group from local storage
        const notes = JSON.parse(localStorage.getItem(groupId))

        // Set the group and notes state variables
        if (groupFound) setGroup(groupFound);
        else setGroupError(true);

        if (notes) setNotes(notes);
        else setNotes([]);
    }, [groupId])

    // Function to add a new note to the state and local storage
    const addNote = (note) => {
        setNotes((prev) => [...prev, note]);
        localStorage.setItem(groupId, JSON.stringify([...notes, note]));
    }

    // Render the component
    return (
        <>
            {!groupError ?
                group &&
                <div className={styles.notes_area}>
                    {/* Group name bar */}
                    <div className={styles.groupNameBar}>
                        {/* Back button (visible on small screens) */}
                        {screenWidth < 675 && <Link to={'/'}><BackArrow /></Link>}
                        {/* Display the GroupName component */}
                        <GroupName groupName={group.groupName} bgColor={group.bgColor} fontColor='#FFF' />
                    </div>

                    {/* Notes container */}
                    <div className={styles.notes_container}>
                        {/* Map through notes and render NoteCard components */}
                        {notes.map((note, index) => (
                            <NoteCard key={index} content={note.content} date={note.date} time={note.time} />
                        ))}
                    </div>

                    {/* TypingArea component for adding new notes */}
                    <TypingArea addNote={addNote} />
                </div> :
                // Display an error message if the group is not found
                <div className={`${styles.notes_area} ${styles.groupError}`}>
                    <h1>Group Not Found!</h1>
                </div>
            }
        </>
    )
}

// Export the NoteArea component
export default NoteArea;
