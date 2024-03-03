import { useEffect, useState } from 'react';
import axios from 'axios';

const useGoogleProfile = (user) => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    return profile;
};

export default useGoogleProfile;
