// import React from 'react';
// import Gallery from 'react-photo-gallery';

// const newImages = [
//   'https://i.imgur.com/GPZxhYN.jpg',
//   'https://i.imgur.com/iMmpkBM.jpg',
//   'https://i.imgur.com/0U7ZE8t.jpg',
//   'https://i.imgur.com/Pp8W2Ny.jpg',
//   'https://i.imgur.com/UGdA1kz.jpg',
//   'https://i.imgur.com/b9nqrgl.jpg',
//   'https://i.imgur.com/upfWoXo.jpg',
//   'https://i.imgur.com/qugq7HG.jpg',
//   'https://i.imgur.com/Ekm2a8i.jpg',
//   'https://i.imgur.com/DLHfty7.jpg',
//   'https://i.imgur.com/4G6Baev.jpg',
//   'https://i.imgur.com/PjZO39i.jpg',
//   'https://i.imgur.com/ZARCkTC.jpg',
//   'https://i.imgur.com/LwW4uG2.jpg',
//   'https://i.imgur.com/KEfBvZ7.jpg',
//   'https://i.imgur.com/cfjg5ek.jpg',
//   'https://i.imgur.com/IlTFmz0.jpg',
//   'https://i.imgur.com/CP5ryTO.jpg',
//   'https://i.imgur.com/76DM3Re.jpg',
//   'https://i.imgur.com/X4csIXP.jpg',
//   'https://i.imgur.com/QU0LJL6.jpg',
//   'https://i.imgur.com/lIknZMP.jpg',
//   'https://i.imgur.com/8PISzn6.jpg',
//   'https://i.imgur.com/2yueI6s.jpg',
//   'https://i.imgur.com/uMkU4BQ.jpg',
//   'https://i.imgur.com/BVLoyPE.jpg',
//   'https://i.imgur.com/3fc00kx.jpg',
//   'https://i.imgur.com/lCEpiNu.jpg',
//   'https://i.imgur.com/1KghNQY.jpg',
//   'https://i.imgur.com/dbejet7.jpg',
//   'https://i.imgur.com/GMnaxWa.jpg',
//   'https://i.imgur.com/J75MBgq.jpg',
//   'https://i.imgur.com/gPLSc8v.jpg',
// ].map((url, index) => ({
//   src: url,
//   width: 1920,
//   height: 1080,
//   key: index,
// }));

// const GalleryComponent = () => {
//   return <Gallery photos={newImages} />;
// };

// export default GalleryComponent;

import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './MyGallery.css';
const newImages = [
  'https://i.imgur.com/8e5XYGV.jpg',
  'https://i.imgur.com/GPZxhYN.jpg',
  'https://i.imgur.com/iMmpkBM.jpg',
  'https://i.imgur.com/0U7ZE8t.jpg',
  'https://i.imgur.com/Pp8W2Ny.jpg',
  'https://i.imgur.com/UGdA1kz.jpg',
  'https://i.imgur.com/b9nqrgl.jpg',
  'https://i.imgur.com/upfWoXo.jpg',
  'https://i.imgur.com/qugq7HG.jpg',
  'https://i.imgur.com/Ekm2a8i.jpg',
  'https://i.imgur.com/DLHfty7.jpg',
  'https://i.imgur.com/4G6Baev.jpg',
  'https://i.imgur.com/PjZO39i.jpg',
  'https://i.imgur.com/ZARCkTC.jpg',
  'https://i.imgur.com/LwW4uG2.jpg',
  'https://i.imgur.com/KEfBvZ7.jpg',
  'https://i.imgur.com/cfjg5ek.jpg',
  'https://i.imgur.com/IlTFmz0.jpg',
  'https://i.imgur.com/CP5ryTO.jpg',
  'https://i.imgur.com/76DM3Re.jpg',
  'https://i.imgur.com/X4csIXP.jpg',
  'https://i.imgur.com/QU0LJL6.jpg',
  'https://i.imgur.com/lIknZMP.jpg',
  'https://i.imgur.com/8PISzn6.jpg',
  'https://i.imgur.com/2yueI6s.jpg',
  'https://i.imgur.com/uMkU4BQ.jpg',
  'https://i.imgur.com/BVLoyPE.jpg',
  'https://i.imgur.com/3fc00kx.jpg',
  'https://i.imgur.com/lCEpiNu.jpg',
  'https://i.imgur.com/1KghNQY.jpg',
  'https://i.imgur.com/dbejet7.jpg',
  'https://i.imgur.com/GMnaxWa.jpg',
  'https://i.imgur.com/J75MBgq.jpg',
  'https://i.imgur.com/gPLSc8v.jpg',
].map(url => ({
  original: url,
  thumbnail: url.replace('.jpg', 't.jpg'),
}));

const GalleryComponent = () => {
  return <ImageGallery items={newImages} />;
};

export default GalleryComponent;
