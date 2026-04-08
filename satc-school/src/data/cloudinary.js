const CLOUD_NAME = 'dfchcqbiq';
const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export function getThumbnailUrl(publicId) {
  return `${BASE}/w_220,h_220,c_fill,g_auto,q_auto,f_auto/${publicId}`;
}

export function getModalUrl(publicId) {
  return `${BASE}/w_600,h_600,c_limit,q_auto,f_auto/${publicId}`;
}
