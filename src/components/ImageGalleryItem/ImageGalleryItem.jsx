import React, { Component } from 'react';
import PropTypes from 'prop-types'
import s from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal'

export default class ImageGalleryItem extends Component { 
    static propTypes = {
        alt: PropTypes.string,
        largeUrl: PropTypes.string,
        src: PropTypes.string,
    }
    
    state = {
        isModalOpen: false,
    }
   
    onModalOpen = () => {
        this.setState(({isModalOpen}) => ({ isModalOpen: !isModalOpen}))
    }

    render ()   {
        const { alt, largeUrl, src} = this.props
        const { isModalOpen } = this.state;
        return (
            <> 
    <li className={s.ImageGalleryItem} onClick={this.onModalOpen} >
        <img src={src}
         alt={alt}
         className="ImageGalleryItem-image"
                    
        />
            </li>
                {isModalOpen && <Modal
                    src={largeUrl}
                    onClose={this.onModalOpen}
                     />
                }
        </>    
    )
 } 
}




            