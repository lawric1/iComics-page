fetch('data.json')
    .then(response => response.json())
    .then(data => {
  	// Do something with your data
        for (item in data) {
            console.log(data[item][1])

            var section = document.getElementById("comics")
            var article = document.createElement("article")
            var img = document.createElement("img");
            var name = document.createElement("p")
            var site = document.createElement("a")

            article.classList.add("card")
            
            img.src = data[item][1];
            img.classList.add("poster")

            name.innerText = data[item][0]
            name.classList.add("name")

            site.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            site.target = "_blank"
            site.innerText = 'Read Online'
            site.classList.add("read")

            article.appendChild(img)
            article.appendChild(name)
            article.appendChild(site)

            section.appendChild(article)
        }
        console.log(data[0][1])
    });