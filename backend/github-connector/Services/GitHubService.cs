using Octokit;

namespace github_connector.Services
{
    public interface IGitHubService
    {
        Task<IReadOnlyList<Repository>> GetRepositoriesAsync();
        Task<IReadOnlyList<Issue>> GetIssuesAsync(string owner, string repo);
        Task<Issue> CreateIssueAsync(string owner, string repo, NewIssue newIssue);
    }

    public class GitHubService : IGitHubService
    {
        private readonly IGitHubClient _client;

        public GitHubService(IGitHubClient client)
        {
            _client = client;
        }

        public async Task<IReadOnlyList<Repository>> GetRepositoriesAsync()
        {
            return await _client.Repository.GetAllForCurrent();
        }

        public async Task<IReadOnlyList<Issue>> GetIssuesAsync(string owner, string repo)
        {
            return await _client.Issue.GetAllForRepository(owner, repo);
        }

        public async Task<Issue> CreateIssueAsync(string owner, string repo, NewIssue newIssue)
        {
            return await _client.Issue.Create(owner, repo, newIssue);
        }
    }
}
