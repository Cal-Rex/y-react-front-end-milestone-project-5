import React from 'react'
import styles from '../../styles/Profile.module.css';
import btnStyles from '../../styles/Button.module.css';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Avatar from '../../components/Avatar';
import { Button, Dropdown } from 'react-bootstrap';
import { useSetProfileData } from '../../contexts/ProfileDataContext';
import dropStyles from '../../styles/Dropdown.module.css'



const Profile = (props) => {
  const { profile } = props;
  const { id, following_id, image, owner, display_name } = profile;
  const history = useHistory();
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFollow, handleUnfollow } = useSetProfileData();

  const profileRedirect = () => {
    history.push(`/profiles/${currentUser?.profile_id}/`)
  }
  
  const editProfileRedirect = () => {
    history.push(`/profiles/${currentUser?.profile_id}/edit`)
  }
  
  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.Profile}>
      <div>
        <Dropdown drop="left">
          <Dropdown.Toggle className={`${dropStyles.DropdownContainer}`}>
            <Avatar src={image} />
          </Dropdown.Toggle>
          <Dropdown.Menu align="right" className={dropStyles.DropdownMenu}>
            <Dropdown.Item className={dropStyles.DropdownItem} onClick={profileRedirect}>Profile</Dropdown.Item>
            {is_owner ? (
              <>
                <Dropdown.Item className={dropStyles.DropdownItem} onClick={editProfileRedirect}>Edit Profile</Dropdown.Item>
                <Dropdown.Item className={dropStyles.DropdownItem} onClick={handleLogOut}>Log Out</Dropdown.Item>
              </>
            ) : currentUser ? (
              following_id ? (
                <Dropdown.Item className={dropStyles.DropdownItem} onClick={() => handleUnfollow(profile)}>Unfollow</Dropdown.Item>
              ) : (
                <Dropdown.Item className={dropStyles.DropdownItem} onClick={() => handleFollow(profile)}>Follow</Dropdown.Item>
              )
            ) : (
              <></>
            )}
          </Dropdown.Menu>
        </Dropdown>

      </div>
      <div>
        {owner}
      </div>
    </div>
  )
}

export default Profile