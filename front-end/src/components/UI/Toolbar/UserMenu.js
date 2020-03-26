import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {Link} from "react-router-dom";

const UserMenu = ({user, logout}) => {
	return (
		<UncontrolledDropdown nav inNavbar>
			<Link to='/trackHistory' style={{textDecoration: 'none', color: 'black'}}>Track History</Link>
			<Link to='/artists/new' style={{textDecoration: 'none', color: 'black', marginLeft: '10px'}}>Add artist</Link>
			<Link to='/albums/new' style={{textDecoration: 'none', color: 'black', marginLeft: '10px'}}>Add album</Link>
			<Link to='/tracks/new' style={{textDecoration: 'none', color: 'black', marginLeft: '10px'}}>Add track</Link>
			<DropdownToggle nav caret>
				Hello, {user.username}!
			</DropdownToggle>
			<DropdownMenu right>
				<DropdownItem>
					View profile
				</DropdownItem>
				<DropdownItem divider />
				<DropdownItem onClick={logout}>
					Logout
				</DropdownItem>
			</DropdownMenu>
		</UncontrolledDropdown>
	);
};

export default UserMenu;