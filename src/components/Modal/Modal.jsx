import { Component } from "react";
import s from './Modal.module.css';

export default class Modal extends Component {
    componentDidMount() {
             window.addEventListener('keydown', this.handleKeyDown )
    }

    componentWillUnmount() {
            window.removeEventListener('keydown',this.handleKeyDown)
    }

    handleKeyDown = e => {
            console.log(e.code)
             if (e.code === 'Escape') {
                console.log(this.onModalOpen)
                this.props.onClose();
            }
    }
    
    handleBackdropClick = event => {
            if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }
    render() {
        const {src, alt} = this.props
      return (
        <div className={s.Overlay} onClick={this.handleBackdropClick} >
        <div className={s.Modal} onClick={this.handleKeyDown}  >
            <img src={src} alt={alt} />
        </div>
    </div>
          )  
    }
}


