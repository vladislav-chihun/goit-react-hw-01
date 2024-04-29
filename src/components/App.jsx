import Profile from "./Profile/Profile"
import userData from "./userData.json";
import profileCSS from "./Profile/Profile.module.css"
export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}
