import './Profile.css'
import ProfileLists from '../ProfileDetails/index'

const Profile = ({ profileData, setToggleDetails, toggleDetails }) => {
  return !profileData.length ? (
    <p className="Profile-not-found">No Student Profile Found!</p>
  ) : (
    profileData.map((data, index) => (
      <div key={data.id}>
        <ProfileLists
          data={data}
          setToggleDetails={setToggleDetails}
          toggleDetails={toggleDetails}
          index={index}
        />
      </div>
    ))
  )
}

export default Profile
