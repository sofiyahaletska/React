import React from 'react';

import './sidebar.css';

import { NavLink } from 'react-router-dom';

const Sidebar = (props) => (
  <aside className='sidebar'>
    <div className='sidebar-title'>Activities</div>

    {props.lists.map((list) => (
      <div className='sidebar-item' key={list.id}>
        <NavLink to={`${list.page_name}/${list.id}`} activeClassName="selected">{list.name}</NavLink>
      </div>
    ))}
  </aside>
);

export default Sidebar;
