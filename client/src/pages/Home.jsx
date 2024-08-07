import { Link} from 'react-router-dom';
import { Button } from 'flowbite-react';
import { useEffect, useState} from 'react';
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';

export default function Home() {

  const [posts, setPosts] = useState([]); 
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-2xl font-bold lg:text-5xl'>Share Stories, Discuss Code, Grow Together.</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
        At our platform, we believe in the power of collective learning and collaboration. Share your stories and experiences, dive deep into code discussions, and join a community of like-minded individuals committed to growth and innovation. Together, we’ll explore new ideas, solve challenges, and achieve more, fostering an environment where everyone can thrive.
        Join our community of programmers and tech enthusiasts to share stories, watch videos, and discuss everything coding.
        </p>
        <div className="flex gap-4">
  <Link to='/search'>
    <Button type='button' gradientDuoTone='pinkToOrange' outline>
      View Posts
    </Button>
  </Link>

  
    <Link to='/createpost'>
      <Button type='button' gradientDuoTone='pinkToOrange' outline>
        Create a Post
      </Button>
    </Link>

</div>

      </div>
      <div className='p-1 bg-amber-100 dark:bg-slate-700'></div>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      
      
      </div>
    </div>
  );
}
