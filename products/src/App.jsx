fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzODcyODQ1LCJpYXQiOjE3MjM4NzI1NDUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImNlNmYzYzAyLTE3MzUtNDQ1MC05Y2E5LTU1ODU2ZWNkNThjNSIsInN1YiI6ImdhcmlwYWxseW1va3NoaXRoQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiY2U2ZjNjMDItMTczNS00NDUwLTljYTktNTU4NTZlY2Q1OGM1IiwiY2xpZW50U2VjcmV0IjoiSHhzZ0xqYWxTd01YS1BvQiIsIm93bmVyTmFtZSI6Ik1va3NoaXRoIiwib3duZXJFbWFpbCI6ImdhcmlwYWxseW1va3NoaXRoQGdtYWlsLmNvbSIsInJvbGxObyI6IjEifQ.4SlQ69u5mklZNODmQL-uwW4rwsDLAHQA0-1n9xvJMYs'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(Network response was not ok: ${response.statusText});
    }
    return response.json();
  })
  .then(data => {
    console.log('Request successful:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });