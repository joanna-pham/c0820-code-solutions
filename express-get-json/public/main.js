/* global $ */

$.ajax({
  url: '/api/grades',
  success: data => {
    // eslint-disable-next-line no-console
    console.log('success', data);
  },
  error: err => {
    console.error(err);
  }
});
