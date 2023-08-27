let url = "https://api.github.com/users"
fetch(url)
.then((res)=>res.json())
.then((data)=>console.log(data))