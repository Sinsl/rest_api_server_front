const host = 'http://localhost:3000/';

const sectionGetUser = document.querySelector('.get-user');
const sectionRegisterUser = document.querySelector('.register');
const sectionLoginUser = document.querySelector('.login');
const reset = Array.from(document.querySelectorAll('.btn-reset'));

const getUserForm = sectionGetUser.querySelector('form');
getUserForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log(getUserForm.id.value)
  let resp = await fetch(`${host}users/${getUserForm.id.value}`)
  let result = await resp.json();
  console.log(result)
  if(result.status === 'ok') {
    const div = sectionGetUser.querySelector('.response')
    div.innerHTML = '';
    for(prop in result.user) {
      let elem = null;
      if(prop === 'avatar') {
        elem = document.createElement('img')
        elem.className = 'avatar'
        elem.src = result.user[prop]
      } else {
        elem = document.createElement('p');
        elem.className = 'user-data';
        elem.textContent = `${prop}: ${result.user[prop]}`
      }      
      div.append(elem)
    }
  }
  getUserForm.reset();
})

const getLoginForm = sectionLoginUser.querySelector('form');
getLoginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    email: getLoginForm.email.value,
    password: getLoginForm.password.value,
  }
  let resp = await fetch(`${host}users/login`, 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    }
  )
  let result = await resp.json();
  console.log(result)
  if(result.status === 'ok') {
    const div = sectionLoginUser.querySelector('.response')
    div.innerHTML = '';
    for(prop in result.user) {
      let elem = null;
      if(prop === 'avatar') {
        elem = document.createElement('img')
        elem.className = 'avatar'
        elem.src = result.user[prop]
      } else {
        elem = document.createElement('p');
        elem.className = 'user-data';
        elem.textContent = `${prop}: ${result.user[prop]}`
      }      
      div.append(elem)
    }
  }
  getLoginForm.reset();
})

const getRegisterForm = sectionRegisterUser.querySelector('form');
getRegisterForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    email: getRegisterForm.email.value,
    login: getRegisterForm.login.value,
    name: getRegisterForm.name.value,
    password: getRegisterForm.password.value,
    avatar: getRegisterForm.avatar.value,
  }
  let resp = await fetch(`${host}users/register`, 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    }
  )
  let result = await resp.json();
  console.log(result)
  if(result.status === 'ok') {
    const div = sectionRegisterUser.querySelector('.response')
    div.innerHTML = '';
    for(prop in result.user) {
      let elem = null;
      if(prop === 'avatar') {
        elem = document.createElement('img')
        elem.className = 'avatar'
        elem.src = result.user[prop]
      } else {
        elem = document.createElement('p');
        elem.className = 'user-data';
        elem.textContent = `${prop}: ${result.user[prop]}`
      }      
      div.append(elem)
    }
  }
  getRegisterForm.reset();
})

reset.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const section = btn.closest('section');
    section.querySelector('form').reset();
    section.querySelector('.response').innerHTML = '';
  })
})

