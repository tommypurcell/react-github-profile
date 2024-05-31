/* eslint-disable react/prop-types */
// GithubProfile.jsx

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GitHubCalendar from 'react-github-calendar'
import PropTypes from 'prop-types'

const GitHubProfile = ({ userName, accessToken }) => {
  const [user, setUser] = useState({
    avatar_url: null,
    login: null,
    name: null,
    bio: null,
    public_repos: null,
    followers: null
  })

  // ensures that component receives a userName prop and that it is of type string. If userName is not provided or is of a different type, React will log a warning in the console during development. This helps catch bugs and improves the maintainability of your code by making the expected props clear.
  GitHubProfile.propTypes = {
    userName: PropTypes.string.isRequired
  }

  const [isLoading, setIsLoading] = useState(true)

  async function getUserData(username) {
    if (username) {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json', // Use the v3 version of the API
              // Authorization: `Bearer ${accessToken}` // Include your access token in the Authorization header
            }
          }
        )
        setUser(response.data)
        // set loading false after user data arrives
        if (user) {
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Error fetching GitHub data', error)
      }
    }
  }

  useEffect(() => {
    getUserData(userName)
  }, [])

  return (
    <div className="flex items-center justify-center">
      <div>
        {user.avatar_url === null ? null : (
          <img
            src={user.avatar_url}
            alt="user github"
            className=" rounded-full w-48"
          />
        )}
        <div className="grid grid-cols-2 gap-1 mt-2">
          <div className="flex flex-col">
            <p className="text-3xl text-left">{user.name}</p>
            <p className="text-xl px-2 text-gray-400 text-left">{user.login}</p>
            {user.bio === null ? null : <p>{user.bio}</p>}
          </div>
          <div className="flex flex-col text-right">
            {user.public_repos === null ? null : (
              <p>Public repos: {user.public_repos}</p>
            )}
            {user.followers === null ? null : (
              <p>Followers: {user.followers}</p>
            )}
          </div>
        </div>
        <div className="mt-5 border border-zinc-200 rounded-lg p-5 overflow-x-auto">
          {user.login && (
            <GitHubCalendar
              username={user.login}
              blockSize={7} // Smaller block size
              blockMargin={2} // Smaller margin between blocks
              fontSize={12} // Smaller font size
              hideColorLegend // Hides the color legend to save space
              loading={isLoading}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default GitHubProfile
