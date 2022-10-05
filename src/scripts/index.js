// The following line makes sure your styles are included in the project. Don't remove this.
// import '../styles/main.scss';
// import "babel-polyfill";


// \/ All of your javascript should go here \/

const form = document.querySelector('#submit-form')

const name = document.querySelector('#name'), email = document.querySelector('#email'), password = document.querySelector('#password'), message = document.querySelector('#message'), checkbox = document.querySelector('#checkbox')

// form.addEventListener('submit', (e) => {
//   console.log('submitted')

//   const data = {
//     name: name.value,
//     email: email.value,
//     password: password.value,
//     message: message.value,
//     checkbox: checkbox.checked
//   }
//   console.log(data);

//   const settings = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8'
//     }
//   }
//   fetch('https//jsonplaceholder.typicode.com/posts', settings)
//     .then(data => {
//       console.log('data', data);

//       if (data.status === 201) alert('Data submitted')

//       return data.json()
//     })

//     .then(data => console.log('Data received', data))
//     .catch(error => console.log('error:', error.message))
//   e.preventDefault()
// })

form.addEventListener('submit', (e) => {
  console.log('submitted')

  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
    message: message.value,
    checkbox: checkbox.checked
  }
  console.log(data);

  const settings = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  async function sendData() {

    try {

      const response = await fetch('https://jsonplaceholder.typicode.com/posts', settings)

      if (response.status === 201) alert('Data submitted')

      const data = await response.json()
      console.log('dData ASYNC AWAIT', data);


    } catch (error) {
      console.log('ERROR', error.message);
    }

  }

  sendData()
  e.preventDefault()
})
