import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../redux/actions';

const Header = props => {
    const dispatch = useDispatch();
    const [ searchStr, setSearchStr ] = useState('');
    const setSearch = () => {
        dispatch(search(searchStr))
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Жалобы и отзывы</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/complaints">Жалобы</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/reviews">Отзывы</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">Информация</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Поиск" value={searchStr} onChange={event=>setSearchStr(event.target.value)}/>
                    <a href="/search"className="btn btn-outline-primary my-2 my-sm-0" onClick={setSearch}>Найти</a>
                </form>
            </div>
        </nav>
    );
}

export default Header;