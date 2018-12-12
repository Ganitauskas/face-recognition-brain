import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return(
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Git it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' />
          <button className='w-30 f4 link bw0 grow br2 pv2 ph3 white fw1 tc tracked bg-light-purple'>Detect</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;