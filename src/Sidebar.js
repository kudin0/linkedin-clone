import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux';
import React from 'react'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img
                    src='https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000'
                    alt=''
                />
                <Avatar src={user.photoUrl} className='sidebar__avatar'>
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>42,069</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>69,420</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar