const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table>')
      res.write('<tr>')
      res.write('<th>Location</th>')
      res.write('<th>Number of hours</th>')
      res.write('<th>Amount</th>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Munnar</td>')
      res.write('<td>48</td>')
      res.write('<td>$ 15000</td>')
      res.write('</tr>')
      res.write('<td>kodaikanal</td>')
      res.write('<td>144</td>')
      res.write('<td>$  20000</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>chikmagalur</td>')
      res.write('<td>96</td>')
      res.write('<td>$  10000</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Coorg</td>')
      res.write('<td>96</td>')
      res.write('<td>$  12000</td>')
      res.write('</tr>')
      res.write('</table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})