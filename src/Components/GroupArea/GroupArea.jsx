// Import necessary dependencies, components, and styles
import React from 'react'
import styles from '../css/GroupArea.module.scss'
import GroupName from './GroupName'
import { Link } from 'react-router-dom'
import { useWidth } from '../../Context/WidthContext'
import { useParams } from 'react-router-dom'

// Style for indicating selected group
const selected = {
    backgroundColor: "rgba(47,47,47,0.17)",
    borderRadius: "1rem"
}

// Define the GroupArea component
function GroupArea({
    groups,
    openGroupCreate,
}) {
    // Get the current groupId from the URL
    const { groupId } = useParams();

    // Get the screen width using a custom hook
    const screenWidth = useWidth();

    // Render the component
    return (
        <div className={` ${styles.groupArea} ${groupId && screenWidth < 675 ? "remove" : ""}`}>
            {/* Logo section */}
            <div className={styles.Title}>
                <div>
                    <span>Pocket Notes</span>
                </div>
            </div>

            {/* Groups container */}
            <div className={styles.groupsContainer}>
                {/* Map through groups and render GroupName components */}
                {groups?.map((group) => (
                    <div key={group.groupId} style={group.groupId === groupId ? selected : {}}>
                        {/* Link to navigate to NotesPage with the groupId */}
                        <Link to={`/NotesPage/${group.groupId}`} replace={screenWidth < 675 ? false : true}>
                            <GroupName groupName={group.groupName} bgColor={group.bgColor} />
                        </Link>
                    </div>
                ))}
            </div>

            {/* Add Group button */}
            <button className={styles.addGroupButton} title='Add Group' onClick={openGroupCreate}>+</button>
        </div>
    )
}

// Export the GroupArea component
export default GroupArea
