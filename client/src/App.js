import React, { Component } from 'react'
import friendsApi from './util/friends-api'
import FriendCard from './components/FriendCard'
import Wrapper from './components/Wrapper'
import Title from './components/Title'

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: []
  }

  componentDidMount() {
    this.fetchFriends()
  }

  fetchFriends() {
    friendsApi
      .getFriends()
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(error => console.log(error))
  }

  removeFriend = id => {
    // send request to delete
    friendsApi
      .deleteFriend(id)
      // then fetchFriends
      .then(() => this.fetchFriends())
      .catch(error => console.log(error))
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend._id}
            key={friend._id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App
