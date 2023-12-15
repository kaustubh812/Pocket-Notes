// Import React, useEffect, useState, and components
import React, { useEffect, useState } from 'react'
import GroupArea from '../GroupArea/GroupArea'
import GroupCreate from '../GroupCreate/GroupCreate'
import styles from '../css/GroupHandler.module.scss'

// Define the GroupHandler component
function GroupHandler({
  children,
}) {
    // State variables to manage groups and the visibility of the GroupCreate component
    const [groups, setGroups] = useState([])
    const [showGroupCreate, setShowGroupCreate] = useState(false);

    // Load groups from local storage on component mount
    useEffect(()=> {
        const storedGroups = JSON.parse(localStorage.getItem('groups'));
        if(storedGroups && storedGroups.length > 0) setGroups(storedGroups);
    }, [])

    // Function to add a new group to the state and local storage
    const addGroup = (newGroup)=> {
        setGroups((prev)=> [...prev, newGroup])
        localStorage.setItem('groups', JSON.stringify([...groups, newGroup]));
        setShowGroupCreate(false);
    }

    // Render the component
    return (
        <div className={styles.page_container}>
            {/* Display the GroupArea component */}
            <GroupArea groups={groups} openGroupCreate={()=> setShowGroupCreate(true)}/>
            
            {/* Display children components */}
            {children}
            
            {/* Display the GroupCreate component as a modal if showGroupCreate is true */}
            {showGroupCreate && 
                <div className={styles.createGroupModal} onClick={()=> setShowGroupCreate(false)}>
                    <GroupCreate groups={groups} addGroup={addGroup} />
                </div>
            }
        </div>
    )
}

// Export the GroupHandler component
export default GroupHandler
