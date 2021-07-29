import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import AlbumItem from '../AlbumItem';

AlbumList.propTypes = {
    albumList: PropTypes.array
};

AlbumList.defaultProps = {
    albumList: []
}

function AlbumList({ albumList }) {
    return (
        <div className="album-list">
            {albumList.map(album => (
                <AlbumItem album={album} />
            ))}
        </div>
    );
}

export default AlbumList;