var fs = require('fs')
  , sys = require('sys');

fs.readFile('treasure-chamber-report.txt', function(report) {
  sys.puts("oh, look at all my money: "+report);
});

fs.writeFile('letter-to-princess.txt', '...', function() {
  sys.puts("can't wait to hear back from her!");
});
