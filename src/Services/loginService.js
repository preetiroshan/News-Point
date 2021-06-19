const loginApi = (myData) =>
  fetch('http://localhost:3001/auth/v1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myData)
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
    })
export { loginApi }