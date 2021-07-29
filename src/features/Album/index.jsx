import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/e/0/4/0/e0409f3e0ad757e9542695a29a0c2d60.jpg',
            title: 'Nhạc Hoa Thịnh Hành'
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/8/8/c/d/88cdc94c485a4aa014ea02275af9c0f1.jpg',
            title: 'Rap Việt Nghe Là Ghiền'
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/c/4/6/2/c462b26d4096cedc983910e8ae9e4a93.jpg',
            title: 'Trào Lưu Nhạc Hot'
        }
    ]
    return (
        <div>
            <h2>Có Thể Bạn Sẽ Thích Đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;