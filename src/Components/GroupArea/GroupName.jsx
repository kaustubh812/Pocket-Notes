// Import React and styles
import React from 'react'
import styles from '../css/GroupName.module.scss'

// Define the GroupName component
export default function GroupName({
    groupName,
    bgColor,
    fontColor = "#000",
}) {
    // Split the group name into words
    const groupSplit = groupName.split(/[ ]+/);

    // Extract the first letter of the first word and the first letter of the second word (if exists) to form a short representation
    const groupShort = groupSplit[0].charAt(0).toUpperCase() + (groupSplit[1] ? groupSplit[1].charAt(0).toUpperCase() : "");

    // Render the component
    return (
        <div className={styles.groupsName}>
            {/* Display the short representation of the group name with background color */}
            <div className={styles.groupShort} style={{ backgroundColor: bgColor }}>
                {groupShort}
            </div>

            {/* Display the full group name with customizable font color */}
            <h3 style={{ color: fontColor }}>{groupName}</h3>
        </div>
    )
}
