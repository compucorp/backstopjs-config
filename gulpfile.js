const gulp = require('gulp');
const backstopJSTask = require('./gulp-tasks/backstop.js');

console.log(backstopJSTask);
['reference', 'test', 'openReport', 'approve'].map(action => {
  gulp.task('backstopjs:' + action, () => {
    return backstopJSTask(action);
  });
});
