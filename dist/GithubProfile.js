import 'path/to/output.css'
import React from 'react'
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
var _react = require('react')
var _axios = _interopRequireDefault(require('axios'))
var _reactGithubCalendar = _interopRequireDefault(
  require('react-github-calendar')
)
var _propTypes = _interopRequireDefault(require('prop-types'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}
// GithubProfile.jsx

const GitHubProfile = (_ref) => {
  let { userName, accessToken } = _ref
  const [user, setUser] = (0, _react.useState)({
    avatar_url: null,
    login: null,
    name: null,
    bio: null,
    public_repos: null,
    followers: null
  })

  // ensures that component receives a userName prop and that it is of type string. If userName is not provided or is of a different type, React will log a warning in the console during development. This helps catch bugs and improves the maintainability of your code by making the expected props clear.
  GitHubProfile.propTypes = {
    userName: _propTypes.default.string.isRequired
  }
  const [isLoading, setIsLoading] = (0, _react.useState)(true)
  async function getUserData(username) {
    if (username) {
      try {
        const response = await _axios.default.get(
          'https://api.github.com/users/'.concat(username),
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
              // Use the v3 version of the API
              Authorization: 'Bearer '.concat(accessToken) // Include your access token in the Authorization header
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
  ;(0, _react.useEffect)(() => {
    getUserData(userName)
  }, [])
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'flex items-center justify-center'
    },
    /*#__PURE__*/ React.createElement(
      'div',
      null,
      user.avatar_url === null
        ? null
        : /*#__PURE__*/ React.createElement('img', {
            src: user.avatar_url,
            alt: 'user github',
            className: ' rounded-full w-48'
          }),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'grid grid-cols-2 gap-1 mt-2'
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'flex flex-col'
          },
          /*#__PURE__*/ React.createElement(
            'p',
            {
              className: 'text-3xl text-left'
            },
            user.name
          ),
          /*#__PURE__*/ React.createElement(
            'p',
            {
              className: 'text-xl px-2 text-gray-400 text-left'
            },
            user.login
          ),
          user.bio === null
            ? null
            : /*#__PURE__*/ React.createElement('p', null, user.bio)
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'flex flex-col text-right'
          },
          user.public_repos === null
            ? null
            : /*#__PURE__*/ React.createElement(
                'p',
                null,
                'Public repos: ',
                user.public_repos
              ),
          user.followers === null
            ? null
            : /*#__PURE__*/ React.createElement(
                'p',
                null,
                'Followers: ',
                user.followers
              )
        )
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className:
            'mt-5 border border-zinc-200 rounded-lg p-5 overflow-x-auto'
        },
        user.login &&
          /*#__PURE__*/ React.createElement(_reactGithubCalendar.default, {
            username: user.login,
            blockSize: 7, // Smaller block size
            blockMargin: 2, // Smaller margin between blocks
            fontSize: 12, // Smaller font size
            hideColorLegend: true, // Hides the color legend to save space
            loading: isLoading
          })
      ),
      ' '
    )
  )
}
var _default = (exports.default = GitHubProfile)
