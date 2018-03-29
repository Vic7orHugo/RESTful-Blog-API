# RESTful-Blog-API

### This was a challenge/assignment from [EDX](https://edx.org), course ["Introduction to Node.js"](https://www.edx.org/course/introduction-to-nodejs), Module 2. 

#### The project is a implementation of a RESTful Blog API using Node.js and Express.js framework. In other words, it is just a simple server that can do some CRUD (Create, Read, Update and Delete) http requests. There is no database used for this project, so if the server restarts, the content will be lost :worried:. NODE.JS HAS TO BE INSTALLED IN ORDER TO RUN THIS PROJECT.

- - - - 

To easily test it, you need to open two *bash/cmd* windows on the working folder (If you are a *Linux* or *MAC* user, you already know how to do it). Follow the instructions section below.

___WINDOWS USERS___:
  * If you have *Git* installed on your pc, you just need to go to the folder where you downloaded the project, unzip it, enter on the project folder, right click on a blank space, and click the option "Git Bash Here". Then, follow the instructions section below;
  * If you dont have *Git*, then:
    1. Find the directory where you downloaded the project and unzip it;
    2. Click "Windows Key" + "R" and type cmd;
    3. The project probably is saved on your Downloads or Desktop folder, so just type **cd Downloads\RESTful-Blod-API** or **cd Downloads\RESTful-Blod-API**;
    4. Repeat tips ii and iii. From now on, just follow the instructions section below;
    
- - - -

### INSTRUCTIONS

  * On the first *bash/cmd*, use the command **npm i**;
  * Still on the first one, use the command **npm start**;
  * On the second *bash/cmd*, use the command **sh test.sh** or, if you want to test individualy:
    * To show all the blog posts, use **curl "http&#58;//localhost:3000/posts"**;
    * To add a blog post, use **curl -H "Content-Type: application/json" -X POST -d '{"name": "ANY CONTENT", "url":"ANY CONTENT", "text": "ANY CONTENT"}' "http&#58;//localhost:3000/posts"**;
    * To update a blog post, use **curl -H "Content-Type: application/json" -X PUT -d '{"name": "ANY CONTENT", "url":"ANY CONTENT", "text": "ANY CONTENT"}' "http&#58;//localhost:3000/posts/POSTID"**;
    * To delete a blog post, use **curl -X DELETE "http&#58;//localhost:3000/posts/POSTID"**;
    * To show all the blog post comments, use **curl "http&#58;//localhost:3000/posts/POSTID/comments"**;
    * To add a blog post comment, use **curl -H "Content-Type: application/json" -X POST -d '{"text": "ANY CONTENT"}'  "http&#58;//localhost:3000/posts/POSTID/comments"**; 
    * To update a blog post comment, use **curl -H "Content-Type: application/json" -X PUT -d '{"text": "ANYCONTENT"}'  "http&#58;//localhost:3000/posts/POSTID/comments/COMMENTID"**;
    * To delete a blog post comment, use **curl -X DELETE "http&#58;//localhost:3000/posts/POSTID/comments/COMMENTID"**;
    * To delete all the blog posts at once, use **curl -X DELETE "http&#58;//localhost:3000/reset"**.
    
- - - -    

### SOME OBSERVATIONS

1. Try to have both *bash/cmd* windows on the screen, so you can see the server logs and client responses simultaneously.

2. ANY CONTENT means that you can put any message. Empty spaces (" ") only count for the **"text"** key. If you input empty spaces for the other two keys, the server will/should give you a "Bad request" message.

3. POSTID is the post ID number. It should be a positive integer number.

4. COMMENTID is the comment ID number. It also should be a positive integer number.

5. The server will add the comments and posts with ID numbers just like JS indexes, so it will start from number 0. If you try to PUT or DELETE a non-existent comment/post ID number, the server will/should give you a "Bad request" message.
