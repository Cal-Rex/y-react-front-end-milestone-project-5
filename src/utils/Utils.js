import { axiosReq, axiosRes } from "../api/axiosDefault"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useCurrentUser } from "../contexts/CurrentUserContext";


export const fetchMoreData = async (resource, setResource) => {
    try {
        console.log("running fetchMoreData")
      const { data } = await axiosReq.get(resource.next);
      setResource((prevResource) => ({
        ...prevResource,
        next: data.next,
        results: data.results.reduce((acc, cur) => {
            console.log("data.results.next: ", data.results.next)
          return acc.some((accResult) => accResult.id === cur.id) ? acc : [...acc, cur];
        }, prevResource.results),
      }))
      
    } catch (err) {
        console.log(err)
    }
  };

export const followHelper = (profile, clickedProfile, following_id) => {
    return profile.id === clickedProfile.id
    ? {...profile, followers_count: profile.followers_count + 1, following_id,}
    : profile.is_owner
    ? {...profile, following_count: profile.following_count + 1 }
    : profile
}

export const unfollowHelper = (profile, clickedProfile) => {
  return profile.id === clickedProfile.id
  ? {...profile, followers_count: profile.followers_count - 1, following_id: null}
  : profile.is_owner
  ? {...profile, following_count: profile.following_count - 1 }
  : profile
}

export const profileRedirect = () => {
  history.push(`/profiles/${currentUser?.profile_id}/`)
}

export const editProfileRedirect = () => {
  history.push(`/profiles/${currentUser?.profile_id}/edit`)
}

export const handleLogOut = async () => {
  try {
    await axios.post("dj-rest-auth/logout/");
    setCurrentUser(null);
  } catch (err) {
    console.log(err);
  }
};