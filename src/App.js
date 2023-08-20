import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: [
      { id: 1, title: 'Título 1', body: 'Dominus nonstrum' },
      { id: 2, title: 'Título 2', body: 'Ouro Preto' },
      { id: 3, title: 'Título 3', body: 'Manamana nonstrum' },
    ],
  };

  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeout()
  }

  componentDidUpdate() {
    this.handleTimeout()
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate)
  }

  compo
  handleTimeout = () => {
    const { posts, counter } = this.state
    posts[0].title = 'Um novo título'

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 1000)
  };


  render() {
    const { posts, counter } = this.state

    return (
      <div className='App'>
        <div>{counter}</div>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }

}

export default App;
