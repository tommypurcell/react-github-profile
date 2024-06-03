# GitHubProfile.jsx

<!-- <h2 style="color: red;">v0.2.0 THIS PROJECT IS CURRENTLY UNDER CONSTRUCTION. PLEASE CHECK BACK SHORTLY FOR AN UPDATED VERSION WITH BUG FIXES.</h2> -->

### Please note that this project is in progress. If you encounter bugs please report them in the [issues section](https://github.com/tommypurcell/react-github-profile/issues) of the GitHub repo.


### Also, please feel free to contribute! (See [Contributing](#contributing) below)

## Description

GitHubProfile is a React component designed to display a user's GitHub profile information and activity. It retrieves data from the GitHub API, including user details such as avatar, name, bio, public repositories, and followers. Additionally, it renders a GitHub activity calendar using the `react-github-calendar` package.

![GitHubProfile Screenshot](https://github.com/tommypurcell/github-api-react-component/raw/main/app/public/screenshot-profile.png)

## How it works

`<GitHubProfile />` accepts the following props:

- `userName`: The GitHub username of the user whose profile you want to display.

## Example usage

```jsx
<GitHubProfile userName="tommypurcell" />
```


## Installation

To use the GitHubProfile.jsx component in your React project, follow these steps:

1. Install the required dependencies

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
   />
   ```

## Usage

### Props

- `userName` (required): The GitHub username of the user whose profile you want to display.

### Example

```javascript
import React from 'react'
import GitHubProfile from './GitHubProfile.jsx'

function App() {
  return (
    <div>
      <h1>GitHub Profile</h1>
      <GitHubProfile userName="octocat" />
    </div>
  )
}

export default App
```

## Dependencies

- [axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for making requests to the GitHub API.
- [react-github-calendar](https://www.npmjs.com/package/react-github-calendar): React component to display a user's GitHub activity calendar.
- [prop-types](https://www.npmjs.com/package/prop-types): Runtime type checking for React props.


## Contributing

Thank you for your interest in contributing to the React GitHub Profile component! Follow these steps to contribute:

### Steps to Contribute

1. **Review Issues**

- Check the [issues section](https://github.com/tommypurcell/react-github-profile/issues) to find something to work on.
- If you have a new idea, create a new issue and describe it.
- **Discussion**: Please discuss the issue with the maintainers before starting to ensure alignment and avoid wasted effort.
2. **Clone the Project**
Clone the repository to your local machine.
3. **Create a New Branch** 
Make a new branch for your changes and push your changes to this branch.
4. **Submit a Pull Request**
 Submit a pull request to merge your branch into the main branch.
5. **Wait for Review**
 Wait for your pull request to be reviewed and make any requested changes.
6. **Done!**
 Once your pull request is approved and merged, you're done! Thanks for contributing. :)





## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
