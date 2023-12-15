// Import React, useMemo, and useState
import React, { useMemo, useState } from 'react'
import styles from '../css/GroupCreate.module.scss'

// Array of predefined group colors
const groupColors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"]

// Define the GroupCreate component
function GroupCreate({
    groups,
    addGroup,
}) {
    // State variables to manage form inputs and errors
    const [groupName, setGroupName] = useState("");
    const [groupColor, setGroupColor] = useState("");
    const [nameError, setNameError] = useState("");
    const [colorError, setColorError] = useState(false);

    // Memoized array of existing groupIds
    const groupIds = useMemo(() => {
        return groups.map((group) => group.groupId)
    }, [groups])

    // Function to transform a string into a slug format
    const slugTransform = (value) => {
        if (value && typeof value === "string")
            return value.trim().toLowerCase().replace(/[^a-zA-Z\d]+/g, "-");
    }

    // Handle group name change and check for errors
    const handleGroupNameChange = (e) => {
        setGroupName(e.target.value)
        !groupIds.includes(slugTransform(e.target.value)) ? (nameError && setNameError("")) : setNameError("Name already exists");
    }

    // Handle group submission
    const handleSubmitGroup = () => {
        let error = false;

        // Check if group color is selected
        if (groupColor === "") {
            setColorError(true)
            error = true;
        }

        // Check if group name is valid
        if (groupName.trim().length === 0) {
            setNameError("Name is invalid!")
            error = true;
        } else if (nameError) error = true;

        // If there are errors, return
        if (error) return

        // Create a new group object
        const newGroup = {
            groupName: groupName.trim(),
            groupId: slugTransform(groupName),
            bgColor: groupColor
        }

        // Call the addGroup function with the new group
        addGroup(newGroup);
    }

    // Render the component
    return (
        <div className={styles.createGroup} onClick={(e) => e.stopPropagation()}>
            <h3>Create New Group</h3>
            {/* Group Name input */}
            <div className={styles.groupInput}>
                <label htmlFor="group-name">Group Name</label>
                <input type="text" name='groupName' id='group-name'
                    value={groupName} maxLength={16} onChange={handleGroupNameChange} placeholder='Enter group name' />
                {nameError && <p className={styles.error}>{nameError}</p>}
            </div>
            {/* Group Color selection */}
            <div className={styles.groupInput}>
                <label>Choose Colour</label>
                <div className={styles.colorsArray}>
                    {/* Map through groupColors and render color options */}
                    {groupColors.map((color) => (
                        <div key={color} style={{ backgroundColor: color }}
                            className={color === groupColor ? styles.selected : ""} onClick={() => setGroupColor(color)}></div>
                    ))}
                </div>
                {/* Display error if color is not selected */}
                {(colorError && !groupColor) && <p className={styles.error}>Colour not selected!</p>}
            </div>
            {/* Create Group button */}
            <button className={styles.createGroupButton} onClick={handleSubmitGroup}>Create</button>
        </div>
    )
}

// Export the GroupCreate component
export default GroupCreate
