<p align="center">
  <img src="https://avatars.githubusercontent.com/u/189235068?s=200" width="200px" align="center" alt="OIF Logo" />
  <h1 align="center">📜 Open Invoice Format 📜</h1>
  <p align="center">
    A simple, open-source JSON schema for invoices, designed as an alternative to unnecessary complex standards like ZUGFeRD and XRechnung.
  </p>
</p>



## What is the Open Invoice Format

An open-source, JSON-based schema for invoices. This project is designed to offer a simple and reliable alternative to complex standards like **ZUGFeRD** and **XRechnung**. Built on [JSON schema](https://json-schema.org), it ensures easy validation and parsing across all programming languages.  
If not familiar with JSON check this out: [Whats JSON?](https://www.w3schools.com/js/js_json_intro.asp)

---

## Table of Contents

1. [Why Another Invoice Standard?](#why-another-invoice-standard)
2. [Key Features](#key-features)
3. [Schema Details](#schema-details)  
3.1. [How to use inside a PDF](#how-to-use-inside-a-pdf)
4. [Getting Started](#getting-started)  
4.1. [Integration Libraries](#integration-libraries)
5. [Contributing](#contributing)
7. [Questions or Feedback?](#questions-or-feedback)

---

## Why Another Invoice Standard?

Existing standards like ZUGFeRD and XRechnung are powerful but come with significant drawbacks:

### Key Drawbacks of ZUGFeRD and XRechnung:
- **Complexity:** Both standards include a wide range of optional and mandatory fields, just making them overly complicated and open for errors.
- **Overhead:** Parsing and validating these formats require specialized libraries and expertise.
- **Redundancy:** They often include calculated fields, such as totals and subtotals, which can introduce inconsistencies and errors. Also strict types are missing to parse it properly on all sides.
- **Flexibility Issues:** Limited customization options for non-standard use cases.

### How This Schema Addresses These Issues:
- **Minimalism:** Only the essential data needed for parsing and validation is included.
- **Fixed Structure:** Key fields like countries and currencies are strictly standardized for consistency.
- **No Redundant Fields:** Summations like total costs are deliberately omitted, as they should be calculated dynamically in the frontend or implementation-specific logic.
- **Developer-Friendly:** Designed for straightforward integration without unnecessary overhead.

---

## Key Features

- **Open Source:** Fully open for use and contributions.
- **Language-Agnostic:** JSON-based design ensures compatibility with all modern programming languages.
- **Easy to Validate:** Leverage JSON Schema for quick validation.
- **Developer-Friendly:** Clean and intuitive design for rapid implementation.

---

## Schema details

### How to use inside a PDF:
To use the open invoice format like ZugFeRD inside a PDF. Your JSON should be attached as `inbridge-oif.json` to the PDF.
We recommend to use one of our [integration libraries](#integration-libraries) to make working with OIF as easy as pie!

For the full schema, check out our latest [schema.json](schema.json).

---

## Getting Started

### Prerequisites:

To get started you library need to be able:
- JSON parsing
- JSON Schema validation libraries


<table>
  <tr><th><h3>Integration Libraries:</h3></th></tr>
  <tr>
    <td valign="center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width="20" valign="middle">
      <a href="https://github.com/inbridgeio/oif-ts"> @inbridgeio/oif-ts</a>:  Work with OIF in TypeScript and JavaScript
    </td>
  </tr>
  <tr>
    <td valign="center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png" width="20" valign="middle">
      <a href="#"> Python</a>: Coming soon
    </td>
  </tr>
  <tr>
    <td valign="center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/121px-PHP-logo.svg.png" width="20" valign="middle">
      <a href="#"> PHP</a>: Coming soon
    </td>
  </tr>
  <tr>
    <td valign="center">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/121px-Java_programming_language_logo.svg.png" width="20" valign="middle">
      <a href="#"> Java</a>: Coming soon
    </td>
  </tr>
</table>  

[Contribute your own](#contributing)

---

## Contributing

We welcome contributions! Feel free to submit pull requests or open issues for feature requests or bugs.  
[How to contribute on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Questions or Feedback?

Create an issue or reach out via [GitHub Discussions](https://github.com/inbridgeio/open-invoice-format/discussions).
