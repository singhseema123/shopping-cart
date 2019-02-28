$(document).ready(function() {
  const shoppingCart = [
    // {
    //   category:'',
    //   item:'',
    //   cost: ''
    // }
  ];

  const shoppingSite =[
  
          {
            category: 'Video Games',
            item: 'Far Cry New Dawn - Standard Edition - PS4', 
            cost: '$6.99'
          },
          {
            category: 'Video Games',
            item: 'Marvels Spider Man - PS4', 
            cost: '$8.99'
          },
          {
            category: 'Video Games',
            item: 'Red Dead Redemption 2 - PS4', 
            cost: '$9.99'
          },
          {
            category: 'Board Games',
            item: 'Yahtzee', 
            cost: '$7.99'
          },         
          {
            category: 'Board Games',
            item: 'Jenga Classic Game', 
            cost: '$6.99'
          },
          {
            category: 'Board Games',
            item: 'Sorry! Game', 
            cost: '$8.99'
          }
  ];



  const displayCatalogItems = function()
  {
    console.log('displaying');
    for (let i=0; i< shoppingSite.length; i++)
    {
      $('.prodtabbody').append("<tr>");
      $('.prodtabbody').append(`<td>${shoppingSite[i].category}</td>`);
      $('.prodtabbody').append(`<td>${shoppingSite[i].item}</td>`);
      $('.prodtabbody').append(`<td>${shoppingSite[i].cost}</td>`);
      $('.prodtabbody').append(`<th><button id="add${i}">Add to Cart</button></th>`);
      $('.prodtabbody').append("</tr>");
    }
  }

  const displayOnScreen = function(tabbody)
  {
    if (tabbody === 'prodtabbody')
    {
      console.log('prodtabbody')
      $('.prodtabbody').empty();
      for (let i=0; i< shoppingSite.length; i++)
      {
        $('.prodtabbody').append("<tr>");
        $('.prodtabbody').append(`<td>${shoppingSite[i].category}</td>`);
        $('.prodtabbody').append(`<td>${shoppingSite[i].item}</td>`);
        $('.prodtabbody').append(`<td>${shoppingSite[i].cost}</td>`);
        // $('.prodtabbody').append(`<th><button id="add${i}">Add</button></th>`);
        let newButton = $('<button>');
        // Adds a class of stock to our button
        newButton.addClass('add');
        // Added a data-attribute
        newButton.attr('cat-name', shoppingSite[i].category);
        newButton.attr('item-name', shoppingSite[i].item);
        newButton.attr('cost', shoppingSite[i].cost);
        // Provided the initial button text
        newButton.text('Add');
        // Added the button to the prodtabbody
        $('.prodtabbody').append(newButton);
        $('.prodtabbody').append("</tr>");
      } 
    }
    else
    if (tabbody === 'carttabbody')
    {
      console.log('carttabbody');
      $('.carttabbody').empty();
      for (let i=0; i< shoppingCart.length; i++)
      {
        $('.carttabbody').append("<tr>");
        $('.carttabbody').append(`<td>${shoppingCart[i].category}</td>`);
        $('.carttabbody').append(`<td>${shoppingCart[i].item}</td>`);
        $('.carttabbody').append(`<td>${shoppingCart[i].cost}</td>`);
        // $('.carttabbody').append(`<th><button id="remove${i}">Remove</button></th>`);
        let newremButton = $('<button>');
        // Adds a class of stock to our button
        newremButton.addClass('remove');
        // Added a data-attribute
        newremButton.attr('cat-name', shoppingCart[i].category);
        newremButton.attr('item-name', shoppingCart[i].item);
        newremButton.attr('cost', shoppingCart[i].cost);
        // Provided the initial button text
        newremButton.text('Remove');
        // Added the button to the carttabbody
        $('.carttabbody').append(newremButton);     
        $('.carttabbody').append("</tr>");
      }
    }
  }


  const addToCart = function()
  {
    //console.log('Add button pushed');
    //console.log($(this).attr('cat-name'), $(this).attr('item-name'), $(this).attr('cost'));
    //If item already in shoppingCart, throw an error
    let lineItem = {category: $(this).attr('cat-name'), item: $(this).attr('item-name'), cost: $(this).attr('cost')};
    let found = false;
    for (let i=0; i<shoppingCart.length; i++)
    {
      if ((shoppingCart[i].category === lineItem.category) &&
          (shoppingCart[i].item === lineItem.item) &&
          (shoppingCart[i].cost === lineItem.cost))
      {
        alert("This item is already in the Shopping Cart!");
        found = true;
      }
    }
    if (!found)
    {
      shoppingCart.push( {category:$(this).attr('cat-name'), item:$(this).attr('item-name'), cost: $(this).attr('cost')});
    }
      //console.log(shoppingCart);
    displayOnScreen('carttabbody');
  }

  const removeFromCart = function()
  {
    //console.log("Remove button pushed");
    let lineItem = {category: $(this).attr('cat-name'), item: $(this).attr('item-name'), cost: $(this).attr('cost')};
    for (let i=0; i<shoppingCart.length; i++)
    {
      if ((shoppingCart[i].category === lineItem.category) &&
          (shoppingCart[i].item === lineItem.item) &&
          (shoppingCart[i].cost === lineItem.cost))
        shoppingCart.splice(i,1);
    }
    displayOnScreen('carttabbody');
  }


  // displayCatalogItems();
  displayOnScreen('prodtabbody');
  $('.productPane').on('click', '.add', addToCart);
  $('.shoppingCartPane').on('click', '.remove', removeFromCart);
  //check for add button click
  // for (let i=0; i<shoppingSite.length; i++)
  // {
  //   $( `#add${i}`).on('click', addToCart1(shoppingSite[i].category, shoppingSite[i].item, shoppingSite[i].cost));
  // }



});