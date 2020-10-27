import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import About from './StaticPages/About';
import Accommodation from './StaticPages/Accommodation';
import Feedback from './StaticPages/Feedback';
import UniversalForm from './Forms/UniversalForm';
import Rules from './StaticPages/Rules';
import { useSelector } from 'react-redux';
import Catalog from './Catalog/Catalog';
import { fetchComplaints, fetchReviews } from '../redux/actions';
import PostPage from './PostPage/PostPage';
const MainContent = () => {
    const complaints = useSelector(state => state.posts.complaints.data);
    const reviews = useSelector(state => state.posts.reviews.data);
    return(
        <div className="mb-4 col-xl-8">
            <BrowserRouter>
                <Route exact path="/">
                    <UniversalForm />
                </Route>
                <Route exact path="/complaints">
                    <Catalog posts={complaints} title="Жалобы" download={fetchComplaints}/>
                </Route>
                <Route exact path="/reviews">
                    <Catalog posts={reviews} title="Отзывы" download={fetchReviews}/>
                </Route>
                <Route exact path="/post/:url" component={PostPage} />
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/rules">
                    <Rules />
                </Route>
                <Route exact path="/accommodation">
                    <Accommodation />
                </Route>
                <Route exact path="/feedback">
                    <Feedback />
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default MainContent;