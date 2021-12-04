const data = {
  style: {
    imgFilter: `
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0,0,0,.5);
    `,
    img: `
      position: absolute;
      top: 0;
      left: 0;
      z-index: -2;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    `
  }
}

const template = `
<div style="${data.style.imgFilter}"></div>
<img src="https://c.pxhere.com/photos/1d/9c/black_and_white_guitar_music_musician_sound-1068782.jpg!d" style="${data.style.img}" alt="a musician playing a yamaha guitar">
`

export default template
