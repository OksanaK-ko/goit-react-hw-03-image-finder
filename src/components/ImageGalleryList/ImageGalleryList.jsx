import PropTypes, { object } from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import s from './ImageGalleryList.module.css';

export default function ImageGalleryList({ images }) { 
    return (
        <ul className={s.ImageGallery}>
            {images.map(({ id, webformatURL, largeImageURL }) => {
                return <ImageGalleryItem key={id} src={webformatURL} largeUrl={largeImageURL} />
            })}
      </ul>
        
    )
}


ImageGalleryList.propTypes = {
    images: PropTypes.arrayOf(object).isRequired,
}