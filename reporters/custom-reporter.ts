import type { Reporter, TestCase, TestResult, Suite } from '@playwright/test/reporter';

class CustomReporter implements Reporter {
  onBegin(config: any, suite: Suite) {
    console.log(`Starting the test run with ${suite.allTests().length} tests.`);
  }

  onTestBegin(test: TestCase) {
    console.log(`→ Running: ${test.title}`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    const status = result.status.toUpperCase();
    console.log(`✓ ${test.title} — [${status}]`);
    if (result.status !== 'passed') {
      console.log(`   ❗ Failure Message: ${result.error?.message}`);
    }
  }

  onEnd(result: any) {
    console.log(`Finished test run. Status: ${result.status}`);
  }
}

export default CustomReporter;
