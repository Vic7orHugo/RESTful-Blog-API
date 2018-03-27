/*
	index.js - Script that imports all the CRUD requests for comments and posts of the RESTful Blob API.
			   It exports the mudules containing the CRUD requests, making it easier to import it all.
	27/03/2018 20:33
*/

const comments = require('./comments.js');
const posts = require('./posts.js');

module.exports = {comments, posts};