import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";

const UserMenu = ({user}) => {
	return (
		<UncontrolledDropdown nav inNavbar>
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