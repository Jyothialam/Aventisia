# GitHub Cloud Connector

A simple .NET backend service to connect with GitHub API, allowing users to fetch repositories, list issues, and create new issues.

## Features
- **Fetch Repositories**: Get all repositories for the authenticated user.
- **List Issues**: Retrieve issues from a specific repository.
- **Create Issue**: Post a new issue to a repository.

## Tech Stack
- **Backend**: ASP.NET Core Web API (.NET 10.0)
- **Library**: [Octokit](https://github.com/octokit/octokit.net) for GitHub API integration.

## Setup Instructions

### Prerequisites
- .NET 10.0 SDK installed.
- A GitHub Personal Access Token (PAT).
  - Go to GitHub Settings -> Developer settings -> Personal access tokens -> Tokens (classic).
  - Generate a new token with at least `repo` permissions.

### Configuration
1. Open `appsettings.json`.
2. Replace `YOUR_GITHUB_PERSONAL_ACCESS_TOKEN` with your actual GitHub PAT.
3. (Optional) Adjust the `UserAgent` if desired.

```json
  "GitHub": {
    "Token": "ghp_xxxxxxxxxxxxxxx",
    "UserAgent": "GitHubConnectorApp"
  }
```

### Running the Project
```bash
dotnet run
```

The API will be available at `http://localhost:5033` (or the port specified in your `launchSettings.json`).

## API Endpoints

### 1. Fetch Repositories
- **URL**: `GET /api/GitHub/repos`
- **Description**: Returns name, URL, and stars of repos for the authenticated user.

### 2. List Issues
- **URL**: `GET /api/GitHub/repos/{owner}/{repo}/issues`
- **Description**: Returns list of issues in the specified repository.

### 3. Create Issue
- **URL**: `POST /api/GitHub/repos/{owner}/{repo}/issues`
- **Body**:
  ```json
  {
    "title": "New issue title",
    "body": "Description of the issue"
  }
  ```

## Error Handling
The API returns a `400 Bad Request` with an error message in case of:
- Invalid PAT
- Network issues
- Incorrect repository or owner names
- Missing body fields for issue creation
