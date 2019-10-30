import axios from 'axios'

export default {
  getFriends: () => axios.get('/api/friends'),
  deleteFriend: id => axios.delete(`/api/friends/${id}`)
}
