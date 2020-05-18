import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => (
  <aside className='sidebar'>
    <div className='sidebar-title'>Activities</div>

    {props.lists.map((info) => (
      <div className='sidebar-item' key={info.id}>
        <NavLink to={`/${info.pageName}/${info.id}`} activeClassName="selected">{info.name}</NavLink>
      </div>
    ))}
  </aside>
);

export default Sidebar;
