import React,{useContext} from 'react';
import Navbar from './Navbar';
import Sidebar from './post/Sidebar';
import CreatePost from './post/Create';
import PostList from './post/List';
import {UserContext} from '../context/UserContext'
import "./home.css"
import Rightbar from './post/Rightbar';

const Home = () => {
    const {user} = useContext(UserContext);
    let avatar = user.data.user.avatar;

    return(
        <section>
        <Navbar />
        <div className="homeContainer" id="main__container">
        <div className="row">
        <div className="col-md-3">
        <Sidebar />
        </div>
        <div className="col-md-5">
        <CreatePost avatar={avatar} />
        <PostList/>
        </div>
        <div className="col-md-3">
        <Rightbar />
        </div>
        </div>
        </div>
        </section>
        
    )
}

export default Home;