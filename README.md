# GitHubProfile.jsx

## Description

GitHubProfile is a React component designed to display a user's GitHub profile information and activity. It retrieves data from the GitHub API, including user details such as avatar, name, bio, public repositories, and followers. Additionally, it renders a GitHub activity calendar using the `react-github-calendar` package.

![GitHubProfile Screenshot](https://github.com/tommypurcell/github-api-react-component/raw/main/app/public/screenshot-profile.png)

## How it works

`<GitHubProfile />` accepts two props:

- `userName`: The GitHub username of the user whose profile you want to display.
- `accessToken`: Your GitHub access token. This is required if you want to access user data from private repositories or if you encounter rate-limiting issues.

## Example usage

`<GitHubProfile userName={'tommypurcell'} accessToken={yourGithubAccessToken}`>

## Installation

To use the GitHubProfile.jsx component in your React project, follow these steps:

1. Install the required dependencies:

   ```bash
   npm install axios react-github-calendar prop-types
   ```

2. Include the component in your project directory.

3. Import the component into your React application:

   ```javascript
   import GitHubProfile from './GitHubProfile.jsx'
   ```

4. Render the component in your application, passing the required props:
   ```javascript
   <GitHubProfile
     userName="yourGitHubUsername"
     accessToken="yourGitHubAccessToken"
   />
   ```

## Usage

### Props

- `userName` (required): The GitHub username of the user whose profile you want to display.
- `accessToken` (optional): Your GitHub access token. This is required if you want to access user data from private repositories or if you encounter rate-limiting issues.

### Example

```javascript
import React from 'react'
import GitHubProfile from './GitHubProfile.jsx'

function App() {
  return (
    <div>
      <h1>GitHub Profile</h1>
      <GitHubProfile userName="octocat" accessToken="yourAccessToken" />
    </div>
  )
}

export default App
```

## Dependencies

- [axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for making requests to the GitHub API.
- [react-github-calendar](https://www.npmjs.com/package/react-github-calendar): React component to display a user's GitHub activity calendar.
- [prop-types](https://www.npmjs.com/package/prop-types): Runtime type checking for React props.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
