import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Table } from "flowbite-react";
import { FaThumbsUp } from 'react-icons/fa';

export default function PostSession({ sessions }) {
  const [showMore, setShowMore] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleShowMore = async () => {
    try {
      // Simulate fetching more sessions or setting the condition
      if (sessions.length > 9) {
        setShowMore(true);
      } else {
        console.log('Fetch more sessions');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Check if sessions is null or undefined and provide a default value
  const sessionList = sessions || [];

  return (
    <>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold lg:text-5xl">Create a Session</h1>
        <h5 className="text-1xl font-bold lg:text-3xl">Share Your Expertise and Lead Discussions</h5>
        <p className="text-gray-500 text-xs sm:text-sm">
          Welcome to our platform where you can create and lead your own sessions on topics you’re passionate about! Whether you’re an expert looking to share your knowledge, a thought leader eager to engage with an audience, or simply someone with valuable insights, this is the perfect opportunity for you. Creating a session is straightforward—define your topic, set a date and time, and prepare to lead an engaging discussion. Inspire participants, answer their questions, and contribute to a vibrant exchange of ideas. It's a fantastic way to showcase your expertise, connect with an audience, and make a meaningful impact. Start your journey as a session host today and make your voice heard in our thriving community!
        </p>
        <Link to='/createsession'>
          <Button type='button' gradientDuoTone='pinkToOrange' outline>
            Create
          </Button>
        </Link>
      </div>
      <section className='table-auto overflow-x-scroll md:mx-auto p-3 md:max-w-[80%] scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500 sm:max-w-[100%] sm:mx-auto'>
        <Table hoverable className='shadow-md'>
          <Table.Head>
            <Table.HeadCell>Host Name</Table.HeadCell>
            <Table.HeadCell>Session Title</Table.HeadCell>
            <Table.HeadCell>Room No.</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Time</Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {sessionList.map((session) => (
              <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800' key={session._id}>
                <Table.Cell>{session.name}</Table.Cell>
                <Table.Cell>{session.title}</Table.Cell>
                <Table.Cell>{session.room_no}</Table.Cell>
                <Table.Cell>{formatDate(session.date)}</Table.Cell>
                <Table.Cell>{session.time}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        {showMore && (
          <button
            onClick={handleShowMore}
            className='w-full text-teal-500 self-center text-sm py-7'
          >
            Show more
          </button>
        )}
      </section>
    </>
  );
}
