import { PolaroidGallery } from '@/components';

const samplePhotos = [
  {
    id: '1',
    publicId: 'Speech Avenues School/Gallery/crafts',
    caption: 'Crafts',
    alt: 'Students working on crafts',
  },
  {
    id: '2',
    publicId: 'Speech Avenues School/Gallery/crafts',
    caption: 'Crafts',
    alt: 'Students working on crafts',
  },
];
export default function Gallery() {
  return (
    <div className="max-w-3xl mx-auto px-8 pt-8">
      {' '}
      <h1 className="text-2xl font-bold font-nunito text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 text-center mb-4">
        Gallery
      </h1>
      <PolaroidGallery photos={samplePhotos} />
    </div>
  );
}
