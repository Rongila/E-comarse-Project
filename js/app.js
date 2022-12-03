$(".dress_slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});
$(".slider_mid").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});
$(".item_right_slider_for_hot_deal").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  asNavFor: ".item_left_slider_for_hot_deal,.item_mid_slider_for_hot_deal",
});
$(".item_left_slider_for_hot_deal").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".item_mid_slider_for_hot_deal,.item_right_slider_for_hot_deal",
});
$(".item_mid_slider_for_hot_deal").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".item_left_slider_for_hot_deal,.item_right_slider_for_hot_deal",
});
$(".tab_slider_main").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 2,
  arrows: false,
});
$(".round_catagory_slid").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 3,
  arrows: false,
});
$(".slider_ON").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 3,
  arrows: false,
});
$(".blog-contain_main").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
});
$(".box-category_slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 2,
  arrows: false,
});
