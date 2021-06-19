const getSavedNewsApi = () =>
  fetch('http://localhost:3001/api/v1/news', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
const removeSavedNewsApi = (id) =>
  fetch(`http://localhost:3001/api/v1/news/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
export { getSavedNewsApi, removeSavedNewsApi }