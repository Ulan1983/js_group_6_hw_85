import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {Link} from "react-router-dom";

const UserMenu = ({user}) => {
	return (
		<UncontrolledDropdown nav inNavbar>
			<Link to='/trackHistory' style={{textDecoration: 'none', color: 'black'}}>Track History</Link>
			<DropdownToggle nav caret>
				Hello, {user.username}!
			</DropdownToggle>
			<DropdownMenu right>
				<DropdownItem>
					View profile
				</DropdownItem>
				<DropdownItem divider />
				<DropdownItem>
					Logout
				</DropdownItem>
			</DropdownMenu>
		</UncontrolledDropdown>
	);
};

export default UserMenu;