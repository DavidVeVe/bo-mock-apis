// Benchmark Routes
const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

//Report
router.route('/api/v2/benchmark/reports')
    .get(requestHandler.benchmark.reports.get());

// Industry Ranking
router.route('/api/v2/benchmark/timeless/industry')
    .get(requestHandler.benchmark.timeless.industry.get());

// Technology Stack
router.route('/api/v2/benchmark/timeless/fileType')
.get(requestHandler.benchmark.timeless.fileType.get());

// Performance trend
router.route('/api/v1/benchmark/timed/organization')
.get(requestHandler.benchmark.timed.organization.get());

// Summary Organization
router.route('/api/v1/benchmark/organization/summary')
    .get(requestHandler.benchmark.organization.summary.get());

// Employment Structure
router.route('/api/v2/benchmark/timeless/employee_type')
    .get(requestHandler.benchmark.timeless.employee_type.get());

// Universe ranking
router.route('/api/v1/benchmark/timeless/bouniverse')
  .get(requestHandler.benchmark.timeless.bouniverse.get());

// Location strategy
router.route('/api/v2/benchmark/timeless/timezones')
  .get(requestHandler.benchmark.timeless.timezones.get());

// Old routes
router.route('/api/v1/benchmarks/reports')
.get(requestHandler.benchmarkReports.get());
router.route('/api/v1/benchmarks/constituents')
.get(requestHandler.benchmarkReports.get());

module.exports = router;
