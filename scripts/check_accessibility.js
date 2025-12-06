// scripts/check_accessibility.js

const pa11y = require('pa11y');
const { promisify } = require('util');
const path = require('path');

// --- Configuration ---
const SITE_URL = 'http://localhost:3000'; // Default Docusaurus local URL
const DEFAULT_FILE_PATH = path.join(__dirname, '..', 'accessibility_report.html');

// Promisify the pa11y function for easier async/await usage
const pa11yAsync = promisify(pa11y);

async function runAccessibilityCheck(url = SITE_URL, reportPath = DEFAULT_FILE_PATH) {
  console.log(`Starting accessibility check for: ${url}`);

  try {
    const results = await pa11yAsync(url, {
      // Pa11y options
      // Standard can be 'WCAG2A', 'WCAG2AA', 'WCAG2AAA', 'Section508'
      standard: 'WCAG2AA', // Target WCAG 2.1 AA compliance
      // Include or exclude certain types of issues
      // 'error', 'warning', 'notice'
      reporters: ['cli', 'html'], // Output to console and save as HTML report
      // Add specific rules to ignore if necessary (e.g., for known false positives)
      // ignore: ['WCAG2A.Principle1.Guideline1_1.1_1_1.H37'],
      // Actions to perform before running the check (e.g., click buttons, fill forms)
      // actions: [
      //   'click .my-button'
      // ],
      // Specify which parts of the page to check
      // includeNotices: true,
      // includeWarnings: true,
    });

    console.log(`Accessibility check completed.`);
    console.log(`Errors found: ${results.issues.filter(r => r.type === 'error').length}`);
    console.log(`Warnings found: ${results.issues.filter(r => r.type === 'warning').length}`);
    console.log(`Notices found: ${results.issues.filter(r => r.type === 'notice').length}`);

    // Pa11y automatically saves the HTML report if 'html' reporter is used and outputPath is specified
    // However, we can manually save or process the results if needed.
    // For now, the HTML report will be saved by Pa11y's built-in reporter if configured.

    if (results.issues.length === 0) {
      console.log('✅ No accessibility issues found based on initial automated scan.');
      console.log('Note: This is an automated check. Manual testing is still required for full compliance.');
    } else {
      console.log('❌ Accessibility issues were found. Please review the report and the console output above.');
      console.log('Note: This is an automated check. Manual testing is still required for full compliance.');
    }

    // Example of saving a custom report (optional, Pa11y's built-in reporter handles this if configured)
    // const fs = require('fs');
    // fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  } catch (error) {
    console.error('Error running accessibility check:', error);
    throw error; // Re-throw to be caught by caller if needed
  }
}

// Execute the check if this script is run directly
if (require.main === module) {
  const urlToCheck = process.argv[2] || SITE_URL;
  const reportPath = process.argv[3] || DEFAULT_FILE_PATH;

  runAccessibilityCheck(urlToCheck, reportPath)
    .then(() => {
      console.log('Accessibility check script finished.');
    })
    .catch((error) => {
      console.error('Accessibility check script failed:', error);
      process.exit(1); // Exit with error code
    });
}

module.exports = { runAccessibilityCheck };
