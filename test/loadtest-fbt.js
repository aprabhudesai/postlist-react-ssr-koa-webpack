const loadtest = require('loadtest');
var beautify_html = require('js-beautify').html;

const MAX_REQUESTS = 10;
const CONCURRENCY = 5;

function statusCallback(error, result, latency) {
  console.log('---------------------------------------------------');
  console.log(beautify_html(result.body));
  console.log('---------------------------------------------------');
}

function createOptionsForRequest(url) {
  return {
    url: url,
    maxRequests: MAX_REQUESTS,
    concurrency: CONCURRENCY,
    statusCallback: statusCallback
  };
}

function createPromiseForLoadTest(url, language) {
  return new Promise((resolve, reject) => {
    const options = createOptionsForRequest(url);
    loadtest.loadTest(options, function(error, result) {
      if (error) {
        reject();
        return console.error('Got an error: %s', error);
      }
      console.log(`Tests for ${ language } ran successfully`);
      resolve();
    });
  });
}

function parallelLoadTest() {
  const promise1 = createPromiseForLoadTest('http://localhost:8088', 'ENGLISH');
  const promise2 = createPromiseForLoadTest('http://localhost:8088/?locale=fr_FR', 'FRENCH');
  const promise3 = createPromiseForLoadTest('http://localhost:8088/?locale=ja_JP', 'JAPANESE');
  return Promise.all([
    promise1,
    promise2,
    promise3
  ]).then(() => console.log('DONE'));
}

parallelLoadTest();
