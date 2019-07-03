import { connect } from 'react-redux';
import PhotoList from './../components/PhotoList';
import { fetchPhotos } from './../store/actions';

const mapStateToProps = state => {
    const { photoIds, photosById } = state.photos
    return {
        photoIds,
        photosById
    }
}

export default connect(mapStateToProps, { fetchPhotos })(PhotoList)