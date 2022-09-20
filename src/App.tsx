import React, { useState, useEffect } from 'react';
import AlbumSlider from './components/AlbumSlider';
import Gallery from './components/Gallery';
import Header from './components/Header';
import { splitInto4Data } from './utils/helper';
import { Album, AlbumList } from './utils/interface';

type Props = {};

const App: React.FC<Props> = () => {
  const [listAlbums, setListAlbum] = useState<Album[]>([])
  const [listPhotos, setListPhoto] = useState<AlbumList[][]>([])
  const [selectedAlbumId, setSelectedAlbumId] = useState(1)

  const handleFetchAlbums = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await res.json()
    setListAlbum(data?.slice(0, 10))
  }

  useEffect(() => {
    handleFetchAlbums()
    setSelectedAlbumId(1)
  }, [])

  useEffect(() => {
    (
     async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${selectedAlbumId}/photos`)
      const data = await res.json()
      setListPhoto(splitInto4Data(data))
     }
     )()

     const horizontalScroll: any = document.getElementById('horizontalScroll');
     const width = horizontalScroll.scrollWidth;
   
     if (horizontalScroll.scrollLeft !== width) {
       horizontalScroll.scrollTo(horizontalScroll.scrollLeft + 1, 0);
     }
  }, [selectedAlbumId])
  

  return (
    <>
      <div className='font-poppins max-w-[400px] w-full mx-auto bg-white h-screen text-xs font-medium flex flex-col scrollbar-hide  overflow-y-auto overflow-x-none'>
        <Header />

        <AlbumSlider 
          listAlbums={listAlbums} 
          selectedAlbumId={selectedAlbumId} 
          setSelectedAlbumId={setSelectedAlbumId} 
        />

        <Gallery 
          listPhotos={listPhotos} 
        />

      </div>
    </>
  );
}

export default App;