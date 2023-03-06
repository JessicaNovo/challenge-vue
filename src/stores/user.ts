import { reactive } from 'vue'

interface User {
  username: string;
  firstName: string;
  lastName: string;
  image: string;
  id: string;
  message: string;
  token: string;
}

const userState = reactive({
  name: '',
  username: '',
  image: '',
  id: '',
  error: '',
  isLoggedIn: false
})

const loginAPI = (username: string, password: string) => 
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  })
  .then(res => res.json())
  .then(data => data);

const getUserAPI = (id: string) =>
  fetch(`https://dummyjson.com/users/${id}`)
    .then(res => res.json())
    .then(data => data)

const actions = {
  async getUser(id: string) {
    const user: User = await getUserAPI(id)
    if (user.message) return

    userState.name = `${user.firstName} ${user.lastName}`
    userState.username = user.username
    userState.image = user.image
    userState.id = `${user.id}`
    userState.isLoggedIn = true

    return
  },

  async login(username: string, password: string) {
    const user: User = await loginAPI(username, password)
    if (user.message) {
      userState.error = user.message
      return false
    }

    userState.name = `${user.firstName} ${user.lastName}`
    userState.username = user.username
    userState.image = user.image
    userState.id = user.id
    userState.isLoggedIn = true

    localStorage.setItem('UserId', `${user.id}`)

    return true
  },

  async logout() {
    userState.name = ''
    userState.username = ''
    userState.image = ''
    userState.id = ''
    userState.error = ''
    userState.isLoggedIn = false

    localStorage.removeItem('UserId')
    return
  }
}

export default { userState, ...actions }
