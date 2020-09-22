import $ from 'jquery'

const template = () => {
  $('#bannerClose').click(function (e) { 
    e.preventDefault();
    $('#proBanner').addClass('d-none');
  });
}

export default template;