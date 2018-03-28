# 1
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": " "}'  "http://localhost:3000/posts" 
sleep 1
# 2
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": " "}' "http://localhost:3000/posts/0"
sleep 1
# 3
curl "http://localhost:3000/posts" 
sleep 1
# 4 
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": " "}'  "http://localhost:3000/posts" 
sleep 1
# 5
curl "http://localhost:3000/posts" 
sleep 1
# 6
curl -X DELETE "http://localhost:3000/posts/0" 
sleep 1
# 7
curl "http://localhost:3000/posts" 
sleep 1
# 8
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES7 Features", "url":"http://webapplog.com/es7", "text": "Something new!"}'  "http://localhost:3000/posts" 
sleep 1
# 9
curl "http://localhost:3000/posts/0/comments" 
sleep 1
# 10
curl -H "Content-Type: application/json" -X POST -d '{"text": "Cool."}'  "http://localhost:3000/posts/0/comments" 
sleep 1
# 11
curl -H "Content-Type: application/json" -X POST -d '{"text": "It is ok."}'  "http://localhost:3000/posts/1/comments" 
sleep 1
# 12
curl -H "Content-Type: application/json" -X PUT -d '{"text": "Actually, I think it is bad."}'  "http://localhost:3000/posts/1/comments/0" 
sleep 1
# 13
curl -H "Content-Type: application/json" -X POST -d '{"text": "I disagree with the previous comment."}'  "http://localhost:3000/posts/1/comments" 
sleep 1
# 14
curl "http://localhost:3000/posts" 
sleep 1
# 15
curl -X DELETE "http://localhost:3000/posts/0/comments/0" 
sleep 1
# 16
curl "http://localhost:3000/posts" 
sleep 1
# 17
curl "http://localhost:3000/posts/0/comments" 
sleep 1
# 18
curl "http://localhost:3000/posts/1/comments" 
sleep 1
# 19
curl -X DELETE "http://localhost:3000/reset"