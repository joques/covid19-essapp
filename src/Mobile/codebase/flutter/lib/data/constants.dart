/// API
const String API_BASE_URL = 'http://196.216.167.150:{port}/covid/v1/';
const Map<String, int> API_PORTS = {
  'centres': 6550,
  'stats': 6549,
  'faq': 6551
};

/// services
const String API_CENTRES = 'centre/all';
const String API_STAT_LATEST = 'statistics/latest';
const String API_STAT_ALL = 'statistics/latest';
const String API_FAQ = 'faq/all';
