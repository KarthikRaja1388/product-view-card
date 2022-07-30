function changeProductImage(){
    var screen_size = window.innerWidth;
    console.log(screen_size);

    var image = document.getElementById('product-image');

    if(screen_size >= 600){
        image.setAttribute('src', 'images/image-product-desktop.jpg')
    }else{
        image.setAttribute('src', 'images/image-product-mobile.jpg')

    }
}