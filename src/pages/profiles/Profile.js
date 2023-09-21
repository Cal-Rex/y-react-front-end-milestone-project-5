import React from 'react';
import styles from '../../styles/Profile.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Avatar from '../../components/Avatar';
import { Dropdown } from 'react-bootstrap';
import { useSetProfileData } from '../../contexts/ProfileDataContext';
import dropStyles from '../../styles/Dropdown.module.css';
import axios from 'axios';


const Profile = (props) => {
  const { profile, listView } = props;
  const { following_id, image, owner } = profile;
  const history = useHistory();
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFollow, handleUnfollow } = useSetProfileData();

  const profileRedirect = () => {
    history.push(`/profiles/${profile?.id}/`);
  };
  
  const editProfileRedirect = () => {
    history.push(`/profiles/${profile?.id}/edit`);
  };
  
  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
    } catch (err) {
      // console.log(err);
    }
  };

  const profileListView = 
    <div className={styles.ProfileList}>
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
      <div className={styles.NameList}>
        {owner}
      </div>
    </div>
  
  const followingView = 
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
    <div className={styles.Name}>
      {owner}
    </div>
  </div>

  return (
    listView ? profileListView : followingView
  );
};

export default Profile;