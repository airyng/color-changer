$( function() {
  // state
  let textChangingMode = false;

  // handlers
  function refreshSwatch() {
    let hue = $( '#slider' ).slider( 'value' );
    $( '.ui-slider-handle' ).css( 'background-color', `hsl(${hue}, 100%, 50%)` )
    if (textChangingMode) {
      $( '#swatch .text' ).css( 'color', `hsl(${hue}, 100%, 50%)` );
      $( '.color-label-text' ).show();
      $( '.color-label-back' ).hide();
    } else {
      $( '#swatch' ).css( 'background-color', `hsl(${hue}, 100%, 50%)` );
      $( '.color-label-text' ).hide();
      $( '.color-label-back' ).show();
    }
  }

  function typeSwitcherHandler (e) {
    textChangingMode = $(this).is(':checked');
    refreshSwatch();
  }

  // init
  $( document ).tooltip({
    show: {
      effect: "slideDown",
      delay: 500
    }
  });

  $('input[type="checkbox"]').change(typeSwitcherHandler);

  $( '#slider' ).slider({
    orientation: 'horizontal',
    range: 'min',
    max: 300,
    value: randomInteger(0, 300),
    slide: refreshSwatch,
    change: refreshSwatch
  });

  refreshSwatch()
} );

// Returns random Int from min to max
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}