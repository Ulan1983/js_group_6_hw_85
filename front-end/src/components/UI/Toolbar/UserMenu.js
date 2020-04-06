import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {Link} from "react-router-dom";

import {apiURL} from "../../../constants";

const UserMenu = ({user, logout}) => {
	return (
		<UncontrolledDropdown nav inNavbar>
			<Link to='/trackHistory' style={{textDecoration: 'none', color: 'black'}}>Track History</Link>
			<Link to='/artists/new' style={{textDecoration: 'none', color: 'black', marginLeft: '10px'}}>Add artist</Link>
			<Link to='/albums/new' style={{textDecoration: 'none', color: 'black', marginLeft: '10px'}}>Add album</Link>
			<Link to='/tracks/new' style={{textDecoration: 'none', color: 'black', marginLeft: '10px'}}>Add track</Link>
			<DropdownToggle nav caret>
				{user.facebookId ?
					<img src={user.avatarImage} alt="avatarImage"
						 style={{maxWidth: '50px', borderRadius: '50px', marginRight: '10px'}}/>
					:
					<img src={apiURL + '/uploads/' + user.avatarImage} alt="avatarImage"
						 style={{maxWidth: '50px', borderRadius: '50px', marginRight: '10px'}}/>
				}
				Hello, {user.displayName}!
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