// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Used the following link to get the license details:
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  if(license == "Apache"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if(license == "Boost"){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
  else if(license == "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "Apache"){
    return "https://opensource.org/licenses/Apache-2.0"
  }
  else if(license == "Boost"){
    return "https://www.boost.org/LICENSE_1_0.txt"
  }
  else if(license == "MIT"){
    return "https://opensource.org/licenses/MIT"
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "Apache"){
    return "### Apache"
  }
  else if(license == "Boost"){
    return "### Boost"
  }
  else if(license == "MIT"){
    return "### MIT"
  }
  else {
    return "";
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  const licenseBadge=renderLicenseBadge(data.license);
  const licenseLink=renderLicenseLink(data.license);
  const licenseSection=renderLicenseSection(data.license);

  let selectedLicense ="";
  let linkInside ="";

  if(licenseSection){
    selectedLicense=`## Licence: <br>
${licenseSection} <br>
  ${licenseLink} <br>
  ${licenseBadge}`
  linkInside = "-	[License](#license)"
  }

  let contributingSection ="";
  if(data.contributing == "yes"){
    contributingSection = `If you as a developer want to contribute this project, please follow the link below to do so: <br>	
    The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, <br> 
    but you can always write your own if you'd prefer.`
  }
  else{
    contributingSection = "No Contributions can be made to this code!"
  }
 
   return `# ${data.title}

## Description:
${data.description}

## Table Of Contents:
- [Installation Guide](#installation-guide)
- [Usage](#usage)
${linkInside}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation Guide:
${data.installation}

## Usage: 
${data.usage}

${selectedLicense}

## Contributing:
${contributingSection}

## Tests:
${data.tests}

## Questions:
If you have any question please contact: <br>
name: ${data.username} <br>
email: ${data.email}
  `;

}

export default generateMarkdown;
