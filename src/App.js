import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';

class App extends Component {
  state = {
    posts: [

    ]
  };

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    })
    this.setState({ posts: postsAndPhotos })
  }

  componentDidMount() {
    this.loadPosts()
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
        <div className='posts'>
          {posts.map(post => (
            <PostCard key={post.id} title={post.title} id={post.id} cover={post.cover} body={post.body} />
          ))}
        </div>
      </section>
    );
  }

}

export default App;
