const { exec } = require('child_process');
exec('DISPLAY=:0 google-chrome --no-sandbox http://192.168.1.233', (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err)
  } else {
   // the *entire* stdout and stderr (buffered)
   console.log(`stdout: ${stdout}`);
   console.log(`stderr: ${stderr}`);
  }
});
