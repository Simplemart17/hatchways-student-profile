import React, { useState } from 'react'
import calculateAverage from '../../utils/calculateAverage'
import plusIcon from '../../assets/plus.svg'
import minusIcon from '../../assets/minus.svg'
import Input from '../InputField/TextInput'

const ProfileLists = ({ data, setToggleDetails, toggleDetails }) => {
  const [tagState, setTagState] = useState({ tags: '' })

  const handleChange = (event) => {
    setTagState({ ...tagState, tags: event.target.value })
  }

  const handleAddTag = (event) => {
    let newArray = data.tags
    if (event.key === 'Enter') {
      newArray.push(tagState.tags)
      setTagState({ tags: '' })
    }
  }

  return (
    <div className="Profile-container">
      <div className="Profile-img-wrapper">
        <img src={data.pic} alt="" className="Profile-img" />
      </div>
      <div className="Profile-info-container">
        <div className="Profile-name-wrapper">
          <h1 className="Profile-name">{`${data.firstName} ${data.lastName}`}</h1>
          <button>
            <img
              src={toggleDetails[data.id] ? minusIcon : plusIcon}
              alt=""
              className="Profile-icon"
              onClick={setToggleDetails(data.id)}
            />
          </button>
        </div>
        <div className="Profile-details">
          <p>
            Email: <span>{`${data.email}`}</span>
          </p>
          <p>
            Company: <span>{`${data.company}`}</span>
          </p>
          <p>
            Skill: <span>{`${data.skill}`}</span>
          </p>
          <p>
            Average: <span>{`${calculateAverage(data.grades)}%`}</span>
          </p>
          {toggleDetails[data.id] && (
            <div className="Profile-score">
              {data.grades.map((grade, idx) => (
                <p key={idx}>
                  {`Test${idx + 1}`}: <span>{`${grade}%`}</span>
                </p>
              ))}
            </div>
          )}
          <div className="Profile-tag">
            {data && data.tags && data.tags.map((tag, idx) => <p key={idx}>{tag}</p>)}
          </div>
          <Input
            placeholder="Add a tag"
            onChange={handleChange}
            name={tagState.tags}
            value={tagState.tags}
            className="Profile-input-width"
            onKeyPress={handleAddTag}
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileLists
