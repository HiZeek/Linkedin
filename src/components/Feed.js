import { useEffect, useState } from 'react';
import { db } from './Firebase';
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import '../styles/Feed.css';
import InputOption from './InputOption';
import Post from './Post';

// MATERIAL UI ICONS
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

const Feed = () => {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

     useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
     }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: 'Isaac Idibia',
            description: 'This is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
    };

  return (
    <div className="feed">
        <div className="feed-inputContainer">
            <div className="feed-input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed-inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                <InputOption Icon={YouTubeIcon} title='Video' color='#E7A33E'/>
                <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'/> 
            </div>
        </div>

        {/* Posts */}
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
            <Post
                key={id} 
                name={name} 
                description={description} 
                message={message}
                photoUrl={photoUrl} 
            />
        ))}
    </div>
  )
}

export default Feed;