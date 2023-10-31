/**
 * @description - This fucntion filter the student profile using the search parameter
 * @param {Array} profileData
 * @param {String} searchParam
 * @param {String} tagSearchParam
 * @returns {Array} filtered profile
 */
const searchProfile = (profileData, searchParam, tagSearchParam) => {
  const filteredProfile = profileData.filter((data) => {
    const nameFilter =
      data.firstName.toLowerCase().includes(searchParam.toLowerCase()) ||
      data.lastName.toLowerCase().includes(searchParam.toLowerCase())

    const tagFilter = data.tags.find((tag) =>
      tag.toLowerCase().includes(tagSearchParam.toLowerCase()),
    )

    return searchParam && !tagSearchParam
      ? nameFilter
      : !searchParam && tagSearchParam
      ? tagFilter
      : nameFilter && tagFilter
  })

  return filteredProfile
}

export default searchProfile
