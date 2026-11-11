import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useProfile from "../hooks/useProfile";
import { actions } from "../actions";

const ProfilePage = () => {
  const { auth } = useAuth();
  const { api } = useAxios();

  const { state, dispatch } = useProfile();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });

    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`,
        );

        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response?.data,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error?.message,
        });
      }
    };

    fetchProfile();
  }, [api, auth, dispatch]);

  if (state?.loading) {
    return <div>data loading profile page.....</div>;
  }

  return (
    <div>
      <h1>
        welcome, {state?.user?.firstName} {state?.user?.lastName}
      </h1>

      <div>you have post : {state?.posts.length}</div>
    </div>
  );
};

export default ProfilePage;
