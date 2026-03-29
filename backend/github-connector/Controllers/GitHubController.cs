using Microsoft.AspNetCore.Mvc;
using github_connector.Services;
using Octokit;

namespace github_connector.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GitHubController : ControllerBase
    {
        private readonly IGitHubService _gitHubService;

        public GitHubController(IGitHubService gitHubService)
        {
            _gitHubService = gitHubService;
        }

        [HttpGet("repos")]
        public async Task<IActionResult> GetRepos()
        {
            try
            {
                var repos = await _gitHubService.GetRepositoriesAsync();
                return Ok(repos.Select(r => new { r.Name, r.HtmlUrl, r.Description, r.StargazersCount }));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("repos/{owner}/{repo}/issues")]
        public async Task<IActionResult> GetIssues(string owner, string repo)
        {
            try
            {
                var issues = await _gitHubService.GetIssuesAsync(owner, repo);
                return Ok(issues.Select(i => new { i.Number, i.Title, i.State.Value, i.CreatedAt, i.User.Login }));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("repos/{owner}/{repo}/issues")]
        public async Task<IActionResult> CreateIssue(string owner, string repo, [FromBody] IssueRequest request)
        {
            try
            {
                var newIssue = new NewIssue(request.Title) { Body = request.Body };
                var issue = await _gitHubService.CreateIssueAsync(owner, repo, newIssue);
                return CreatedAtAction(nameof(GetIssues), new { owner, repo }, new { issue.Number, issue.Title, issue.HtmlUrl });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }

    public class IssueRequest
    {
        public string Title { get; set; } = string.Empty;
        public string Body { get; set; } = string.Empty;
    }
}
