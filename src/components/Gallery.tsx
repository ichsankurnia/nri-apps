import React from 'react';
import { AlbumList } from '../utils/interface';

type Props = {
    listPhotos: AlbumList[][]
};

const Gallery: React.FC<Props> = ({ listPhotos }) => {
    return (
        <>
            <div className='px-5'>
                {listPhotos.map((item, key) =>
                    <div className='grid grid-cols-2 gap-2 mt-2' key={key}>
                        <div>
                            {item[0] && <img alt='' src={item[0].thumbnailUrl} className='object-cover w-full rounded-xl h-[200px]'></img>}
                            {item[1] && <img alt='' src={item[1].thumbnailUrl} className='object-cover w-full rounded-xl h-[100px] mt-2'></img>}
                        </div>
                        <div>
                            {item[2] && <img alt='' src={item[2].thumbnailUrl} className='object-cover w-full rounded-xl h-[100px]'></img>}
                            {item[3] && <img alt='' src={item[3].thumbnailUrl} className='object-cover w-full rounded-xl h-[200px] mt-2'></img>}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Gallery;