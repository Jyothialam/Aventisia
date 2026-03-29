using Octokit;
using github_connector.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddOpenApi();

// Register Octokit Client
builder.Services.AddScoped<IGitHubClient>(sp =>
{
    var config = sp.GetRequiredService<IConfiguration>();
    var token = config["GitHub:Token"];
    var userAgent = config["GitHub:UserAgent"] ?? "GitHubConnectorApp";
    
    var client = new GitHubClient(new ProductHeaderValue(userAgent))
    {
        Credentials = new Credentials(token)
    };
    return client;
});

// Register Application Services
builder.Services.AddScoped<IGitHubService, GitHubService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
