/*
	comments.js - Script containing the CRUD requests for posting of the RESTful Blob API.
	27/03/2018 20:31
*/

let store = require('../store.js'); // Imports the stored blog posts

module.exports = { //Exports the CRUD requests 
  	getComments(req, res) { 				// Shows to client all the existing blog posts
    	res.status(200).send(store.posts); 	// "OK" code is emmitted and send to client all the blog posts stored
	}, 
	addComment(req, res) {					// Adds a new blog post
		// Only accepts the body when it has, at least, these keys - Input validation
		if (!req.body.name || !req.body.url || !req.body.text) return res.sendStatus(400); 	// Informs the client that his command was a bad request 
		if (!req.body.name.trim() || !req.body.url.trim()) return res.sendStatus(400);		// Informs the client that his command was a bad request
		let id = store.posts.length;	// Saves the amount of posts as the postId - Post 1 has postId=0 and so on
		let newPost = { 				// Only takes the information that is necessary - Input cleaning
			name: req.body.name,
			url: req.body.url,
			text: req.body.text
		};
		store.posts.push(newPost);			// Saves the post
		res.status(201).send({postId: id});	// "Created" code is emmitted and sends to client the postId number
	},
	updateComment(req, res) {				// Updates an existing blog post
		// If the post selected does not exist, emmits "Invalid Request" code and informs the client that there is no post with such ID
		if (!store.posts[req.params.postId]) return res.status(400).send('There is no post with this ID.'); // Checks if the post exists
	    // Only accepts the body when it has, at least, these keys - Input validation
		if (!req.body.name || !req.body.url || !req.body.text) return res.sendStatus(400); 	// Informs the client that his command was a bad request 
		if (!req.body.name.trim() || !req.body.url.trim()) return res.sendStatus(400);		// Informs the client that his command was a bad request
		let id = store.posts.length;	// Saves the amount of posts as the postId - Post 1 has postId=0 and so on
		let newPost = { 				// Only takes the information that is necessary - Input cleaning
			name: req.body.name,
			url: req.body.url,
			text: req.body.text
		};
	    store.posts[req.params.postId] = newPost;				// Updates the selected post
		res.status(200).send(store.posts[req.params.postId]);	// Emmits "Ok" code and sends to client the updated post
	},
	removeComment(req, res) { 					// Deletes a post
		if (!store.posts[req.params.postId]) {  // Checks if the post exists
			console.log(`There is no post with ID=${req.params.postId}`); 	// Logs on the server console a error message
			return res.status(400).send();									// Emmits the "Invalid Request" code
 		}
	    store.posts.splice(req.params.postId, 1);										// Deletes the selected post
	    console.log(`The post with ID=${req.params.postId} was successfully deleted!`);	// Logs on server console the deleted post postId number
	    res.status(204).send();															// Emmits the "No content" code
	}  
}