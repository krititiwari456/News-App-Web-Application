const main = document.getElementById('articles-container');

let data;
let dataLength = 0;

async function getData() {
   const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=65a59df3391248a59d09daff1c7fa763');
   const result = await res.json();
   data = result.articles;
   dataLength = data.length;
   console.log(data);
   renderUI();
}

getData();

function renderUI() {
   for (let i = 0; i < dataLength; i++) {

      if (data[i].description && data[i].author) {
         const article = document.createElement('article');
         article.innerHTML = `
        
             <img class="article-image" src="${data[i].urlToImage}" alt="News Image 1"/>
             <div class="article-content">
                 <a class="aa" href="${data[i].url}" target="_blank">
                        <h2 class="heading" id="heading-${i}">${data[i].title}</h2>
                    </a>
                <p class="description">
                   ${data[i].description}
                </p>
                <p class="author-cont">
              ${data[i].publishedAt} ·${data[i].author}
              </p>  
             </div>
             
           `;
           
           main.appendChild(article);
      }
   }
}

