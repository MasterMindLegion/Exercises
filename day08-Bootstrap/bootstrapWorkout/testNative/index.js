// reference the V4 version of the library as dependency
var bsn = require('bootstrap.native/dist/bootstrap-native-v4');

// Create a Carousel instance
var myCarousel = new bsn.Carousel(element,options);


var myModal = document.getElementById('modalID');

// initialize on a <div class="modal"> with all options
// Note: options object is optional
var myModalInstance = new Modal(myModal,
{ // options object
  content: '<div class="modal-body">Some content to be set on init</div>', // sets modal content
  backdrop: 'static', // we don't want to dismiss Modal when Modal or backdrop is the click event target
  keyboard: false // we don't want to dismiss Modal on pressing Esc key
});

// OR initialize and show the modal right away
var myModalInstance = new Modal(myModal, options);
myModalInstance.show();
// now you know why we don't need a show option
