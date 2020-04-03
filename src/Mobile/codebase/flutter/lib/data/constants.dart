/// API
const String API_BASE_URL = 'https://covidservices.nust.na:{port}/covid/v1/';
const String API_BASE = 'https://covidservices.nust.na:{port}/covid/v1/';
const Map<String, int> API_PORTS = {
  'centres': 6550,
  'stats': 6549,
  'faq': 6551,
  'memos':6552,
};
const Map<String, String> REGION_IDS = {
  'Kunene Region': 'kunene',
  'Omusati Region': 'omusati',
  'Oshana Region': 'oshana',
  'Ohangwena Region':'ohangwena',
  'Oshikoto Region':'ohangwena',
  'Kavango East Region':'kavango-east',
  'Kavango West Region':'kavango-west',
  'Zambezi Region':'zambezi',
  'Erongo Region':'erongo',
  'Otjozondjupa Region':'otjozondjupa',
  'Omaheke Region':'omaheke',
  'Khomas Region':'khomas',
  'Hardap Region':'hardap',
  'ǁKaras Region':'karas',
  'All of Namibia':'all'
};
/// services
const String API_CENTRES = 'centre/all';
const String API_STAT_LATEST = 'statistics/latest';
const String API_STAT_ALL = 'statistics/latest';
const String API_STAT_REGION = 'statistics/regional/';
const String API_STAT_AGG = 'statistics/aggregate';
const String API_FAQ = 'faq/all';
const String API_MEMOS = 'docs/mobile/description';
const String API_MEMOS_DOC = '/docs/doc/{docid}';