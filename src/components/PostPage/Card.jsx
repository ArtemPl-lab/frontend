import React from 'react'
import { useDispatch } from 'react-redux';
import { commentReply } from '../../redux/actions';
import { Link } from 'react-scroll';

const Card = ({ comment }) => {
    const dispatch = useDispatch();
    const setReply = event => {
        dispatch(commentReply(comment));
    }
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{comment.name}</h5>
                <p className="card-text">{comment.content}</p>
                <Link className="card-link" to="commentForm" spy={true} smooth={true} offset={-20} duration={500} onClick={setReply} style={{ cursor: "pointer" }}>
                    Ответить
                </Link>
            </div>
        </div>
    )
}

export default Card;
