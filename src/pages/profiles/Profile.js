import React from 'react'
import styles from '../../styles/Profile.module.css';
import btnStyles from '../../styles/Button.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Avatar from '../../components/Avatar';
import { Button, Dropdown } from 'react-bootstrap';
import { useSetProfileData } from '../../contexts/ProfileDataContext';



const Profile = (props) => {
  const { profile } = props;
  const { id, following_id, image, owner, display_name } = profile;

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
          <Dropdown.Toggle className={`${styles.DropdownContainer}`}>
            <Avatar src={image} />
          </Dropdown.Toggle>
          <Dropdown.Menu align="right" className={styles.DropdownMenu}>
            <Dropdown.Item className={styles.DropdownItem} onClick={profileRedirect}>Profile</Dropdown.Item>
            <Dropdown.Item className={styles.DropdownItem} onClick={editProfileRedirect}>Edit Profile</Dropdown.Item>
            <Dropdown.Item className={styles.DropdownItem} onClick={handleLogOut}>Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </div>
      <div>
        {owner}
      </div>
      <div>
        {currentUser && !is_owner && (
          following_id ? (
            <Button variant="primary" className={`${btnStyles.Btn}`}
              onClick={() => handleUnfollow(profile)}
            >
              Unfollow
            </Button>
          ) : (
            <Button variant="primary" className={`${btnStyles.Btn}`}
              onClick={() => handleFollow(profile)}
            >
              Follow
            </Button>
          )
        )}
      </div>
    </div>
  )
}

export default Profile