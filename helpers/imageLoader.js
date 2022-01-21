const ImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 65}`;
};

export default ImageLoader;
