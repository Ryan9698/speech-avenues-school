import { PolaroidGallery } from '@/components';

const samplePhotos = [
  { id: '1', src: '/images/chalkavatar.webp', caption: 'Field Day' },
  { id: '2', src: '/images/navlogo2.webp', caption: 'Art Class' },
  { id: '3', src: '/images/satcschool.webp', caption: 'Story Time' },
];
export default function Gallery() {
  return (
    <div className="max-w-3xl mx-auto px-8 pt-8">
      {' '}
      <h1>Gallery</h1>
      <PolaroidGallery photos={samplePhotos} />
    </div>
  );
}
