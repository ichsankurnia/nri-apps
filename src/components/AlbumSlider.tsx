import React from 'react';
import { Album } from '../utils/interface';

type Props = {
    listAlbums: Album[],
    selectedAlbumId: number,
    setSelectedAlbumId: (id: number) => any
};

const AlbumSlider: React.FC<Props> = ({ listAlbums, selectedAlbumId, setSelectedAlbumId }) => {
    return (
        <>
            <div className='flex px-2 sticky top-0 bg-white pt-8'>
                <div className='absolute left-[50%] bottom-0 mb-5'>{selectedAlbumId} of 10</div>
                <div className='flex items-center space-x-5 scrollbar-hide overflow-x-auto mx-auto max-w-[95vw] whitespace-nowrap mb-10' id='horizontalScroll'>
                    {listAlbums.map((item, key) =>
                        <section key={key} className='flex-shrink-0' onClick={() => setSelectedAlbumId(Number(item.id))}>
                            <img alt={'album-' + item.id} src={process.env.PUBLIC_URL + '/assets/thumb1.jpg'} className={`bg-purple-200 ${selectedAlbumId === Number(item.id) ? 'w-[180px]' : 'w-[140px]'} h-[100px] rounded-[10px] rounded-bl-[20px] object-cover anim`} />
                            {selectedAlbumId === Number(item.id) &&
                                <div className='bg-oren text-white -mt-10 pt-12 pb-2 rounded-b-xl w-[180px] break-all px-3 shadow-xl'>
                                    <p className='comment_text truncate'>{item.title}</p>
                                </div>
                            }
                        </section>
                    )}
                </div>
            </div>
        </>
    );
}

export default AlbumSlider;