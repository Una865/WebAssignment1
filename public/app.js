setTimeout(function(){
    $('.loader_bg').fadeToggle();
  
},1000);

function menuBarClick(x) {
    if($(".cross").hasClass("change")){
        $("header").css({"background-color" : "black", "color":"white", "height":"auto", "overflow":"hidden"});
        $(".nav-header a").css({"color":"white"});
        $(".mobile-nav-item").css({"display":"none"});
        $("body").css({"overflow":"scroll"});
     }
   else{  
       $("body").css({"overflow":"hidden"})
        $("header").css({"background-color" : "white", "color":"black", "height":"100%",  "overflow-y":"scroll"});
       $(".nav-header a").css({"color":"black"});
       $(".mobile-nav-item").css({"display":"block"});}
    $(".mobile-nav-item a").css({"color":"black", "display":"block"});
    x.classList.toggle("change");

    $("#mobileid").toggleClass("mobile");

}

$("input[type='checkbox']").on('change', function(){
    $(this).val(this.checked ? "true" : "false");
  })
$("#booking-button").click(function(){
    if(!$("#booking-botton").hasClass('active')){
$('.ctrl-sub-navigation-item').fadeOut(500);
$('.control-div-header').html("Bookings");
$('.control-form').attr({"id": "booking-search", "method":"GET", "action":'/users/managing/search-bookings'});
$("#first").attr({"name":"datumbukiranja", "placeholder":"Date of the booking", "type":"date"});
$('#second').attr({'name':'brand', 'placeholder':"Brand", 'type':'text'});
$("#third").attr({"name":"model", "placeholder":"Model", "type":"text"});
$("#fourth").attr({"name":"from", "placeholder":"From", "type":"date"});
$("#fifth").attr({"name":"to", "placeholder":"To", "type":"date"});
$("#motori").css("display", "none");
$("label").css("display", "none");
$("#klima").css("display", "none");
$('.fa-plus').attr({"class":"fas fa-search"});
$('select').css('display','none');
$("#location-input").css('display', 'inline');
$('#third, #fourth, #fifth').css('display', 'inline');
    }
});
$("#car-button").click(function(){
    if(!$("#car-button").hasClass('active')){
    $('#add-location, #other-locations').css('display', 'none');
    $('#add-car, #other-cars').css('display', 'inline-block');
$('#add-location').removeClass('active');
$('#other-locations').removeClass('active');
$('#other-cars').removeClass('active');
$('#add-car').addClass('active');
    $('.control-div-header').html('Add car');
    $('.control-form').attr({"method": 'POST', "action":'/users/managing/post-cars', "id": "add-cars"});
    $("#first").attr({"name":"brand", "placeholder":"Brand",  'type':"text"});
    $("#second").attr({"name":"model", "placeholder":"Model" });
    $("#motori").css("display", "inline");

    $("#third").attr({"name":"places", "placeholder":"Number of places", "type":"number", "min":"1", "max":"10"});
    $('label').css({"display":"inline"});
$('#klima').css("display", "inline");
    $("#fourth").attr({"placeholder":"Price", "name": 'price', 'type':'number'});
$("#fifth").attr({"placeholder": "URL address of picture", "name": 'img', "type":"text"});
$(".fa-search").attr({"class": "fas fa-plus"});
$('select').css('display','inline');
$("#location-input").css('display', 'inline');

$('#third, #fourth, #fifth, label, #klima').css('display', 'inline');
    }
});
$("#location-button").click(function(){
    if(!$("#location-button").hasClass('active')){
    $('#add-car, #other-cars').css('display', 'none');
    $('#add-location, #other-locations').css('display', 'inline-block');
    $('.control-form').attr({"method": 'POST', "action":'/users/managing/post-locations', "id":'add-locations'});
    $('#other-locations').removeClass('active');
    $('#other-cars').removeClass('active');
    $('#add-car').removeClass('active');
    $('#add-location').addClass('active');
    $('.control-div-header').html('Add location');
    $('.control-form').attr("id", 'dodaj-lokaciju');
    $('#first').attr({'name':'city', 'placeholder':'City'});
    $("#second").attr({'name':'country', 'placeholder':'Country'});
    $('select').css('display','none');
    $("#location-input").css('display', 'none');
    $('#third, #fourth, #fifth, label, #klima').css('display', 'none');
    $('.fa-search').attr({"class": 'fas fa-plus'});
  
    }
});
$('#add-location').click(function(){
        $('.fa-search').attr('class', 'fas fa-plus');
    $('.control-div-header').html("Add location");
    $('.control-form').attr({"method": 'POST', "action":'/users/managing/post-locations', "id":'add-locations'});
});
$('#other-locations').click(function(){
    $('.fa-plus').attr('class', 'fas fa-search');
    $('.control-div-header').html('Other locations');
    $('.control-form').attr({"id": "location-search", "method":"GET", "action":'/users/managing/search-locations'});
});

$('#other-cars').click(function(){
    $('.fa-plus').attr('class', 'fas fa-search');
$('.control-div-header').html('Other cars');
$('.control-form').attr({"id": "car-search", "method":"GET", "action":'/users/managing/search-cars'});
$("#fourth").attr({"placeholder":"Price from", "name": 'cenaod', 'type':'number'});
$("#fifth").attr({"placeholder": "Price to", "name": 'cenado', "type":"number"});

});
$('#add-car').click(function(){
    $('.control-form').attr({"method": 'POST', "action":'/users/managing/post-cars', "id": "add-cars"});
    $('.control-div-header').html('Add a car');
    $('.fa-search').attr('class', 'fas fa-plus');
    $("#fourth").attr({"placeholder":"Price", "name": 'cena', 'type':'number'});
$("#fifth").attr({"placeholder": "URL Adress of picture", "name": 'img', "type":"text"});
});

$(document).ready(function(){
  
    if(window.location.pathname == '/')
    {
        var today = new Date();
var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var tomday = tomorrow.getDate();
var tommonth = tomorrow.getMonth() + 1;
var tomyear = tomorrow.getFullYear();
if(dd < 10) {dd='0'+10}
if(mm<10) {mm='0'+mm} today = yyyy+'-'+mm + '-' + dd;
if(tomday<10) {tomday = '0' + tomday} if(tommonth<10) {tommonth='0' + tommonth} tomorrow = tomyear + '-' + tommonth + '-' + tomday;
 $("#from").attr('value', today);
 $("#to").attr('value', tomorrow);

    }
    if(window.location.pathname == '/users/managing' || window.location.pathname=='/users/managing/search-bookings')
    {
        $('.ctrl-sub-navigation-item').fadeOut(500);
$('.control-div-header').html("Bookings");
$('.control-form').attr({"id": "booking-search", "method":"GET", "action":'/users/managing/search-bookings'});
$("#first").attr({"name":"datumbukiranja", "placeholder":"Booking date", "type":"date"});
$("#third").attr({"name":"model", "placeholder":"Model", "type":"text"});
$("#fourth").attr({"name":"from", "placeholder":"From", "type":"date"});
$("#fifth").attr({"name":"to", "placeholder":"To", "type":"date"});
$("#motori").css("display", "none");
$("label").css("display", "none");
$("#klima").css("display", "none");
$('.fa-plus').attr({"class":"fas fa-search"});
$('select').css('display','none');
$("#location-input").css('display', 'inline');
$('#third, #fourth, #fifth').css('display', 'inline');
    }
    if(window.location.pathname == '/users/managing/search-cars')
    {
        $('#add-location, #other-locations').css('display', 'none');
        $('#add-car, #other-cars').css('display', 'inline-block');
    $('#add-location').removeClass('active');
    $('#other-locations').addClass('active');
    $('#other-cars').addClass('active');
    $('#add-car').removeClass('active');
    $("#booking-button").removeClass('active');
    $("#location-button").removeClass('active');
    $("#car-button").addClass('active');
        $("#first").attr({"name":"marka", "placeholder":"Brand", 'type':'text'});
        $("#second").attr({"name":"model", "placeholder":"Model" });
        $("#motori").css("display", "inline");
   
        $("#third").attr({"name":"sedista", "placeholder":"Number of places", "type":"number", "min":"1", "max":"10"});
        $('label').css({"display":"inline"});
    $('#klima').css("display", "inline");
        $("#fourth").attr({"placeholder":"Price from", "name": 'cenaod', "type":"number"});
    $("#fifth").attr({"placeholder": "Price to", "name": 'cnedo', "type":"number"});
   $('select').css('display','inline');
   $("#location-input").css('display', 'inline');
    $('#third, #fourth, #fifth, label, #klima').css('display', 'inline');
    $('.fa-plus').attr('class', 'fas fa-search');
$('.control-div-header').html('Ostali automobili');
$('.control-form').attr({"id": "car-search", "method":"GET", "action":'/users/managing/search-cars'});
    }
       if(window.location.pathname=='/users/managing/search-locations')
    {
        $('#add-car, #other-cars').css('display', 'none');
        $('#add-location, #other-locations').css('display', 'inline-block');
        $('#other-locations').addClass('active');
        $('#other-cars').removeClass('active');
        $('#add-car').removeClass('active');
        $('#add-location').removeClass('active');
        $('#location-button').addClass('active');
        $('#car-button').removeClass('active');
        $('#booking-button').removeClass('active');
        $('#first').attr({'name':'grad', 'placeholder':'Grad'});
        $("#second").attr({'name':'zemlja', 'placeholder':'Zemlja'});
        $('select').css('display','none');
        $('#location-input').css('display', 'none');
        $('#third, #fourth, #fifth, label, #klima').css('display', 'none');
        $('.fa-plus').attr('class', 'fas fa-search');
        $('.control-div-header').html('Other locations');
        $('.control-form').attr({"id": "location-search", "method":"GET", "action":'/users/managing/search-locations'});
    }
    if(window.location.pathname == '/check')
    {

        $errors = $('.upozorenje');
        if($errors.length > 0)
        {
            $('.booking-form').attr({'action' : '/check'});
            $('.booking-form-button').html('Check avilability');
        }
    }
})
$('.booking-date').change(function(){
    $('.booking-form').attr({'action' : '/check'});
    $('.booking-form-button').html('Check availability');

})
$(".ctrl-navigation-list-item").click(function(){
    $('.ctrl-navigation-list-item').removeClass('active');
    $(this).addClass('active');

})
$('.ctrl-sub-navigation-item').click(function(){
    $('.ctrl-sub-navigation-item').removeClass('active');
    $(this).addClass('active');
})

$('.cancel-button').click(function(){

    $('.confirm-text').html($(this).siblings('#confirm-header').html());
    $('#id01').css('display', 'block');
    $('.input-booking-id').attr('value', $(this).siblings('#booking-id').val());
    $('.input-confirm').attr('value','');
    $('.deletebtn').css({'cursor': 'not-allowed', 'background-color':'black', 'color':'white', 'border-color':'black'});
    $('.deletebtn').attr('type', 'button');
})
$('.trash-car').click(function(){
    $('.confirm-text').html($(this).siblings('#confirm-header').html());
    $('#id01').css('display', 'block');
    $('.input-item-id').attr('value', $(this).siblings('#car-id').val());
    $('.modal-content').attr({'action':'/users/managing/delete-car'});
    $('.container-header').html('Do you want to delete a car');
    $('.zahtev').html('Enter a brand and a model below this');
    $('.input-confirm').attr('value','');
    $('.deletebtn').css({'cursor': 'not-allowed', 'background-color':'black', 'color':'white', 'border-color':'black'});
    $('.deletebtn').attr('type', 'button');
})
$('.trash-location').click(function(){
    $('.confirm-text').html($(this).siblings("#confirm-header").val());
    $('#id01').css('display', 'block');
    $('.input-item-id').attr('value', $(this).siblings('#location-id').val());
    $('.modal-content').attr({'action':'/users/managing/delete-location'});
    $('.container-header').html('Do you want to delete this location');
    $('.zahtev').html('Enter a city name');
    $('.input-confirm').val('');
    $('.deletebtn').css({'cursor': 'not-allowed', 'background-color':'black', 'color':'white', 'border-color':'black'});
    $('.deletebtn').attr('type', 'button');
})
$('.trash-booking').click(function(){
$('.confirm-text').html($(this).siblings('#confirm-header').val());
$('#id01').css('display', 'block');
$(".input-item-id").attr('value', $(this).siblings('#booking-id').val());
$('.modal-content').attr({'action':'/users/managing/delete-booking'});
$('.container-header').html("Do you want to cancel this renting");
$('.zahtev').html('Enter password code.');
$('.input-confirm').val('');
$('.deletebtn').css({'cursor':'not-allowed', 'background-color':'black', 'color':'white', 'border-color':'black'});
$('.deletebtn').attr('type', 'button');
})

$('.input-confirm').on('input', function(){
text1 = $(this).val();

text2 = $('.confirm-text').html();
if(text1.toLowerCase()==text2.toLowerCase())
    {
$('.deletebtn').css({'cursor':'pointer', 'background-color':"#f8d7da", 'color':'#721c24', 'border-color':'#f5c6cb'});
$('.deletebtn').attr({'type': 'submit'});
}

else{
    $('.deletebtn').css({'cursor': 'not-allowed', 'background-color':'black', 'color':'white', 'border-color':'black'});
    $('.deletebtn').attr('type', 'button');
}
})
$('.input-confirm').on('paste', function(e){
    e.preventDefault();
});