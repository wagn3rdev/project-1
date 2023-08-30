import './App.css';
import { Component } from 'react';
import { loadPosts } from './utils/load-posts'
import { Posts } from './components/Posts';

class App extends Component {
  state = {
    posts: [

    ]
  };

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos })
  }

  async componentDidMount() {
    await this.loadPosts()
  }

  componentDidUpdate() {
    // this.handleTimeout()
  }
  componentWillUnmount() {
    // clearTimeout(this.timeoutUpdate)
  }

  // handleTimeout = () => {
  //   const { posts, counter } = this.state
  //   posts[0].title = 'Um novo título'

  //   this.timeoutUpdate = setTimeout(() => {
  //     this.setState({ posts, counter: counter + 1 })
  //   }, 1000)
  // };


  render() {
    const { posts } = this.state

    return (
      <section className='container'>
        <Posts posts={posts} />
      </section>
    );
  }

}

export default App;
