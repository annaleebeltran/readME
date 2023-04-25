// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache-2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL-3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    default:
      return "";
  }
}

// Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    // Replace this URL with the actual URL of the license
    return "https://example.com/license";
  } else {
    return "";
  }
}

// Creadted a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSectionReadme = /## License([\s\S]*?)##/;
  const match = license.match(licenseSectionReadme);
  if (match && match[1]) {
    return match[1];
  } else {
    return '';
  }
}

// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title ${data.title}

# Description
${data.description}

# Table of Contents 
* [Installation](#-Installation)
* [Usage](#-Usage)
* [License](#-Installation)
* [Contributing](#-Contributing)
* [Tests](#-Tests)
* [Questions](#-Contact-Information)
    
# Installation
${data.installation}

# Usage
${data.usage}

# License 
${data.license}


# Contributing 
${data.contributing}

# Tests
${data.tests}

# Contact Information 
* GitHub Username: ${data.userName}
* Contact Email: ${data.email}

`;
}

module.exports = generateMarkdown;
