const PriceFormat(props){
    return (props.product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


export default PriceFormat;
