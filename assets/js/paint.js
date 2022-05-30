function configureListeners() {
    // select img elements
        let images = document.getElementsByTagName('img');

    // iterate over images and add mouseover event listeners
     for (let index = 0; index < images.length; index++) {        
        document.getElementById(images[index].id).addEventListener('mouseover', addOpacity, false)        
        document.getElementById(images[index].id).addEventListener('mouseout', removeOpacity, false)         
    } 
}
    // add appropriate CSS class
addOpacity = function() {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }    
    getProductInfo(event.target.id);     
}
    //remove appropriate CSS class
    removeOpacity = function() {
        if (this.classList.contains('dim')){
           this.classList.remove('dim');
       }
    
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}
function getProductInfo(paintColor) {
    let price;
    let colorName; 

    function updateLabel(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;
        
        let color = document.getElementById('color-name');
        color.textContent = colorName;
    }

    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price
            price = '$14.99';
            colorName = 'Lime Green';
            updateLabel(colorName, price);
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price
            price = '$11.14';
            colorName = 'Medium Brown';
            updateLabel(colorName, price);
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price 
            price = '$22.99';
            colorName = 'Royal Blue';   
            updateLabel(colorName, price);
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price
            price = '$13.42';
            colorName = 'Solid Red';
            updateLabel(colorName, price);
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price
            price = '$21.98';
            colorName = 'Solid White';
            updateLabel(colorName, price);
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price
            price = '$4.99';
            colorName = 'Solid Black';
            updateLabel(colorName, price)
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price
            price = '$8.22';
            colorName = 'Solid Cyan';
            updateLabel(colorName, price);
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price
            price = '$11.99';
            colorName = 'Solid Purple';
            updateLabel(colorName, price);
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price
            price = '$14.99';
            colorName = 'Solid Yellow';
            updateLabel(colorName, price);
            break;   
          default:              
    }
}