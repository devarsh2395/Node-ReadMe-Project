// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "NONE"){
    return `![license badge](https://img.shields.io/badge/license-${license}-brightgreen)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "NONE"){
    return `* [License](#license)`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "NONE"){
    return `## License
    
This project is licensed by the ${license} license.`

  }
  
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table Of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Installation

To install dependencies, run the following command: 

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Test

To run test, use the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

To ask questions about the project, contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).


`;
}

module.exports = generateMarkdown;
