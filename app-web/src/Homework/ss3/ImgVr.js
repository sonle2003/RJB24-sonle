import { ImageViewer } from "react-image-viewer-dv"
import img1 from '../ss2/image/merc.png';
import img2 from '../ss2/image/gle.png';
import img3 from '../ss2/image/glc-coupe.png';

import React, { Component } from 'react'

export default class ImgVr extends Component {
  render() {
    return (
        <div>
        <ImageViewer>
          <img src={img1}  alt="Your image" width={400} height={150}/>
          <img src={img2}  alt="Your image"width={400} height={150} />
          <img src={img3}  alt="Your image"width={400} height={150} />
        </ImageViewer>
      </div>
    )
  }
}
