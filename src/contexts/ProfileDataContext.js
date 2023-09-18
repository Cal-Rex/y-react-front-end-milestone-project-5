import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefault";
import { useCurrentUser } from "./CurrentUserContext";

export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
    
    const [profileData, setProfileData] = useState({
        pageProfile: { results: [] },
        popularProfiles: { results: [] },
    });

    const currentUser = useCurrentUser();

    const handleFollow = async (clickedProfile) => {
        try {
            const { data } = await axiosRes.post('/follows/', {
                followed: clickedProfile.id
            });

            setProfileData(prevState => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map((profile) => {
                        return profile.id === clickedProfile.id
                        ? {...profile, followers_count: profile.followers_count + 1, following_id: data.id}
                        : profile.is_owner
                        ? {...profile, following_count: profile.following_count + 1 }
                        : profile
                    })
                },
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map((profile) => {
                        return profile.id === clickedProfile.id
                        ? {...profile, followers_count: profile.followers_count + 1, following_id: data.id}
                        : profile.is_owner
                        ? {...profile, following_count: profile.following_count + 1 }
                        : profile
                    })
                }
            }));
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(
                    "/profiles/?ordering=-follow_count"
                );
                setProfileData((prevState) => ({
                    ...prevState,
                    popularProfiles: data,
                }));
            } catch (err) {
                console.log(err)
            }
        }
        handleMount();

    }, [currentUser]);
    
    return (
        <ProfileDataContext.Provider value={profileData}>
            <SetProfileDataContext.Provider value={{setProfileData, handleFollow}}>
                {children}
            </SetProfileDataContext.Provider>
        </ProfileDataContext.Provider>
    )
}
