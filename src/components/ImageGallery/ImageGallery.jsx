import { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from "react-loader-spinner";
import Button from '../Button/Button';
import {fetch} from '../../services/fetchApi'
import ImageGalleryList from '../ImageGalleryList/ImageGalleryList';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export default class ImageGallery extends Component {
     static propTypes = {
        imageName: PropTypes.string,        
    }
    state = {
        images: [],
        isLoading: false,
        error: null,
        page:1,
    }

    componentDidUpdate(prevProps, prevState) {
               
        if (prevProps.imageName !== this.props.imageName) {
            this.setState({ isLoading: true })
            fetch(this.props.imageName, this.state.page)
                .then(data => this.setState({ images: data }))
                .then(() => this.setState({ isLoading: false }))
                .catch(error => this.setState({ error: error }))
                .finally(() => 
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth',
                    })
)
        }
        if (prevState.page !== this.state.page) {
            fetch(this.props.imageName, this.state.page)  
                .then(data => this.setState(prevState => ({ images: [...prevState.images, ...data]})))
                .then(() => this.setState({ isLoading: false }))
                .catch(error => this.setState({ error: error }))
                .finally(() =>
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth',
                    })
)
        }
    }
    
    onLoadMore = () => this.setState((prevState)=> ({ page: prevState.page + 1 }));
   
    
    
    render() {
        const { images, isLoading, error } = this.state;
        return (
            <>
                {error && <p>{error.message}</p>}
                {isLoading && <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
        />}
                {images.length > 0 && <ImageGalleryList images={images} />}
                {images.length > 0 && <Button onLoad={this.onLoadMore} />}
               
            </>
        )
    }
}
    