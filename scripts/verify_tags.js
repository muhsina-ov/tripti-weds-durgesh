const http = require('http');

http.get('http://localhost:8080/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const t = data.match(/<title>(.*?)<\/title>/)?.[1];
    const ogT = data.match(/<meta property="og:title" content="(.*?)"/)?.[1];
    const ogI = data.match(/<meta property="og:image" content="(.*?)"/)?.[1];
    const ogD = data.match(/<meta property="og:description" content="(.*?)"/)?.[1];
    const twI = data.match(/<meta name="twitter:image" content="(.*?)"/)?.[1];
    console.log('Title:           ', t);
    console.log('OG Title:        ', ogT);
    console.log('OG Image:        ', ogI);
    console.log('OG Description:  ', ogD);
    console.log('Twitter Image:   ', twI);
  });
});
