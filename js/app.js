$(".dress").slick({
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
