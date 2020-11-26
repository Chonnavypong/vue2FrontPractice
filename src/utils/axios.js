// Multi-Simultaneous requests with Axios. It can can use Axios.all()
/*
axios.all([
  axios.post(`/my-url`, {
    myVar: 'myValue'
  }), 
  axios.post(`/my-url2`, {
    myVar: 'myValue'
  })
])
.then(axios.spread((data1, data2) => {
  // output of req.
  console.log('data1', data1, 'data2', data2)
}));
*/
