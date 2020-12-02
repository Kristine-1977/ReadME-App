// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.usage}
  ## ${data.license}
  ## ${data.testing}
  ## ${data.contribution}
`;
}

module.exports = generateMarkdown;
