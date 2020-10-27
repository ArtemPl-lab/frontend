import React, { useEffect, useState } from 'react'
import { useAPI } from '../../hooks/api.hook';
import Spinner from '../Spinners/Spinner';
import CommentCards from './CommentCards';
import CommentForm from './CommentForm';

const PostPage = props => {
    const [postData, setPostData] = useState({});
    const { loading, request } = useAPI();
    const postUrl = props.match.params.url;
    useEffect(async () => {
        const response = await request('/api/posts/get/review-data', 'POST', JSON.stringify({ url: postUrl }));
        setPostData(response);
    }, [postUrl]);
    if(loading) return <Spinner />
    return (
        <React.Fragment>
            <div>
                <div className="card">
                    <div className="card-header">
                    <h2>{postData.title}</h2>
                    </div>
                    <div className="card-body lead" style={{ minHeight: "297px" }}>
                        {postData.content}
                    </div>
                    <ul className="list-group list-group-flush">
                        {postData.organisation ? <li className="list-group-item">Организация - {postData.organisation}</li> : ''}
                        {postData.address ? <li className="list-group-item">Адрес - {postData.address}</li> : ''}
                        {postData.phone ? <li className="list-group-item">Телефон - {postData.phone}</li> : ''}
                        {postData.email ? <li className="list-group-item">E-mail - {postData.email}</li> : ''}
                        {postData.site ? <li className="list-group-item">Сайт - {postData.site}</li> : ''}
                        {postData.tags ? <li className="list-group-item">Теги - {postData.tags}</li> : ''}
                    </ul>
                </div>
                <CommentForm post={postData}/>
            </div>
            <CommentCards postId={postData._id}/>
        </React.Fragment>
    )
}

export default PostPage;