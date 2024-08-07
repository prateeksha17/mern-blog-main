import { Alert, Button, TextInput, Modal } from 'flowbite-react';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { HiCheckCircle } from 'react-icons/hi';


export default function CreateSession({ onSessionCreate }) {
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    setShowModal(false);
    navigate('/post_session');
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      room_no: Number(formData.room_no),
      date: new Date(formData.date).toISOString(),
    };

    try {
      const res = await fetch('/api/session/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        if (onSessionCreate) {
          onSessionCreate(data);
        }
        setShowModal(true);
      }
    } catch (error) {
      setPublishError('Something went wrong');
    }
  };

  return (
    <div>
      <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl my-7 font-semibold'>Create a Session</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput
              type='text'
              placeholder='Your Name'
              required
              id='name'
              className='flex-1'
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput
              type='text'
              placeholder='Title for Your session'
              required
              id='title'
              className='flex-1'
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          

          <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput
              type='text'
              placeholder='Set Room No.'
              required
              id='room_no'
              className='flex-1'
              onChange={(e) => setFormData({ ...formData, room_no: e.target.value })}
            />
          </div>

          <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput
              type='date'
              placeholder='Set Date For Session'
              required
              id='date'
              className='flex-1'
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>

          <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput
              type='text'
              placeholder='Set Time For Session'
              required
              id='time'
              className='flex-1'
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
          </div>

          <Button type='submit' gradientDuoTone='purpleToPink'>
            Book Session
          </Button>
          {publishError && (
            <Alert className='mt-5' color='failure'>
              {publishError}
            </Alert>
          )}
        </form>
      </div>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiCheckCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              You have successfully created a session.
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='gray' onClick={handleGoBack}>
                Okay
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
