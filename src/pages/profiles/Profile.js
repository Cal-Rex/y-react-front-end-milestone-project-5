import React from 'react'
import styles from '../../styles/Profile.module.css';
import btnStyles from '../../styles/Button.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Avatar from '../../components/Avatar';
import { Button } from 'react-bootstrap';
import { useSetProfileData } from '../../contexts/ProfileDataContext';

const Profile = (props) => {
  const { profile } = props;
  const { id, following_id, image, owner, display_name } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const {handleFollow } = useSetProfileData();

  return (
    <div>
      <div>
        <Link to={`/profiles/${id}/`}>
          <Avatar src={image} />
        </Link>
      </div>
      <div>
        {owner}
      </div>
      <div>
        {currentUser && !is_owner && (
          following_id ? (
            <Button variant="primary" className={`${btnStyles.Btn}`}
              onClick={()=>{}}
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