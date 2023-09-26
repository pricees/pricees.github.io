const articles = {
  "2023-09-26-python-and-django.html": "[2023 Sept 26 WIP] Python and Django Revisited"
}



const articlesList = document.getElementById("articles");
Object.keys(articles).forEach(file => {
  const newItem = document.createElement('li');
  newItem.innerHTML=`<a href="articles/${file}">${articles[file]}</a>`;
  articlesList.append(newItem);
});
