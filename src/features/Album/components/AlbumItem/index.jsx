import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

AlbumItem.propTypes = {
    album: PropTypes.object
};

AlbumItem.defaultProps = {
    album: '',
}

function AlbumItem(props) {
    const { album } = props;
    return (
        <div className="album">
            <img className="album__img" src={album.img} alt={album.title} />
            <h3 className="album__title">{album.title}</h3>
        </div>
    );
}

export default AlbumItem;