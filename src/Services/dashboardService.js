const getAllNewsApi = () =>

  fetch('https://newapi.org/v2/top-headlines?country=in&apiKey=942ed5c801ec4b0ab8598caf4d6a3997')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
const getAllNewsApiTopHeadline = (filterChoice) =>
  fetch(`https://newsapi.org/v2/${filterChoice.endPoint}?country=${filterChoice.country ? filterChoice.country : "in"}&category=${filterChoice.category ? filterChoice.category : "general"}&apiKey=942ed5c801ec4b0ab8598caf4d6a3997`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })

const getAllNewsApiEverything = (filterChoice) =>
  fetch(`https://newsapi.org/v2/${filterChoice.endPoint}?sortBy=${filterChoice.sortBy ? filterChoice.sortBy : "relevancy"}&q=${filterChoice.phrase}&apiKey=942ed5c801ec4b0ab8598caf4d6a3997`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })

const getAllNewsApiSources = (filterChoice) =>
  fetch(`https://newsapi.org/v2/${filterChoice.endPoint}?country=${filterChoice.country ? filterChoice.country : "in"}&q=${filterChoice.phrase}&apiKey=942ed5c801ec4b0ab8598caf4d6a3997`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })

const addToReadLaterApi = (newsToBeReadLater) =>
  fetch('http://localhost:3001/api/v1/news', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(newsToBeReadLater[0])
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })


export { getAllNewsApi, addToReadLaterApi, getAllNewsApiTopHeadline, getAllNewsApiEverything, getAllNewsApiSources }
