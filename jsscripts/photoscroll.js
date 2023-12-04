
const photoGrid = document.getElementById('photo-grid');
const photoURLs = [
'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/97099242-08ea-44f6-89c5-685e000f5cd0.gif?ClientID=vimeo-core-prod&Date=1647728147&Signature=71c524535b6d1d4584f4a7a3b0a32bf27cead47b',
'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/828b8ffc-c77f-49d1-a0b5-f22924e6b3bd.gif?ClientID=vimeo-core-prod&Date=1647748452&Signature=ba6cd607c764c408af4917a9c3521101c0dfb288',
'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/970c6d11-a52a-4879-afa2-53138aae4d32.gif?ClientID=vimeo-core-prod&Date=1647729514&Signature=2a089aa15bbf41e0e9b9eef2ed3aa1d394ab1f3d',
'https://i.vimeocdn.com/video/478798044-6a6a13fb10d3b4982bc7318ac52069cb0022d7eb9b44f83a3e29f4f9c3e0677a-d_1920x1080?r=pad',
'https://sites.duke.edu/alexandrite/files/2022/03/kalexandrite-429-150x150.png',
'https://sites.duke.edu/alexandrite/files/2022/03/kalexandrite-433-200x200.png',
'https://sites.duke.edu/alexandrite/files/2022/03/Screen-Shot-2022-02-26-at-5.28.15-PM-1-200x200.png',
'https://sites.duke.edu/alexandrite/files/2022/03/kalexandrite-429-150x150.png',
'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/93b9a154-ecc1-43c2-92e6-0b14a6dc1ee4.gif?ClientID=vimeo-core-prod&Date=1647730965&Signature=01143cec6fcba635546e1067973f9e3bbf5ad8ad',
'https://sites.duke.edu/alexandrite/files/2022/03/cropped-kalexandrite-632-1536x922.png',
'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/93b9a154-ecc1-43c2-92e6-0b14a6dc1ee4.gif?ClientID=vimeo-core-prod&Date=1647730965&Signature=01143cec6fcba635546e1067973f9e3bbf5ad8ad',
'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/970c6d11-a52a-4879-afa2-53138aae4d32.gif?ClientID=vimeo-core-prod&Date=1647729514&Signature=2a089aa15bbf41e0e9b9eef2ed3aa1d394ab1f3d',
'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/97099242-08ea-44f6-89c5-685e000f5cd0.gif?ClientID=vimeo-core-prod&Date=1647728147&Signature=71c524535b6d1d4584f4a7a3b0a32bf27cead47b',

];

photoURLs.forEach(url => {
  const photoItem = document.createElement('img');
  photoItem.classList.add('photo-item');
  photoItem.src = url;
  photoGrid.appendChild(photoItem);
});
