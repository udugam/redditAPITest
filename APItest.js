require('dotenv').config()
var RedditAPI = require('reddit-wrapper-v2');
 
var redditConn = new RedditAPI({
        // Options for Reddit Wrapper
        username: process.env.REDDIT_USER,
        password: process.env.REDDIT_PASSWORD,
        app_id: process.env.APP_ID,
        api_secret: process.env.APP_SECRET,
        user_agent: 'user agent for your bot',
        retry_on_wait: true,
        retry_on_server_error: 5,
        retry_delay: 1,
        logs: true
    });

const endpoint = '/r/hiphopheads'

// HTTP GET
redditConn.api.get(endpoint)
.then(function(response) {
    let responseCode = response[0];
    let responseData = response[1];
 
    console.log("Received response (" + responseCode + ")");
    responseData.data.children.forEach(post=>{
        console.log("********************************")
        console.log("Post Title: ", post.data.title)
        console.log("Post url: ", post.data.url)
        console.log("********************************")
    })
})
.catch(function(err) {
    return console.error("api request failed: " + err)
});