import { reactive } from 'vue'

interface Post {
  id: number
  userId: number
  title: string
  body: string
}

type PostsList = Array<Post>

interface User {
  email: string
  id: string
  username: string
  firstName: string
  lastName: string
}

type UsersList = Array<User>

const postsState = reactive({
  posts: <PostsList>[]
})

const searchedUserState = reactive({
  id: '',
  email: '',
  username: '',
  name: '',
})

const getPostsAPI = (userId: string) => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then((response) => response.json())
  .then((data) => data);

const filterUsersAPI = (key: string, value: string) => fetch(`https://dummyjson.com/users/filter?key=${key}&value=${value}`)
  .then(res => res.json())
  .then((data) => {
    return data
  });

const actions = {
  async getUser(email: string) {
    const filteredUsers = await filterUsersAPI('email', email)
    const user: UsersList = filteredUsers.users
    if (user.length === 0) return

    searchedUserState.id = `${user[0].id}`
    searchedUserState.name = `${user[0].firstName} ${user[0].lastName}`
    searchedUserState.username = user[0].username
    searchedUserState.email = user[0].email
    localStorage.setItem('LastSearchedUserEmail', `${user[0].email}`)
    localStorage.setItem('LastSearchedUserId', `${user[0].id}`)
    return
  },

  async getUserPosts( userId: string) {
    const posts: PostsList = await getPostsAPI(userId)
    if (posts.length === 0) {
      return
    }

    postsState.posts = posts
    return
  },
}

export default { postsState, searchedUserState, ...actions }
