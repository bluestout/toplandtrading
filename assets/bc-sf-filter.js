// Override Settings
var bcSfFilterSettings = {
  general: {
      limit: bcSfFilterConfig.custom.products_per_page,
      // Optional
      loadProductFirst: true,
      rangeStyle: 'style2',
      styleScrollToTop: 'style2',
      defaultDisplay: bcSfFilterConfig.custom.layout,
      showPlaceholderProductList: true,
      decimalPriceRange: 2
  },
};

var bcSfFilterTemplate = {
  'soldOutClass': 'product-price--sold-out grid-view-item--sold-out',

  // Grid Template
  'vendorGridHtml': '<div class="grid-view-item__vendor">{{itemVendorLabel}}</div>',
  'soldOutLabelGridHtml': ' <span class="product-price__sold-out">' + bcSfFilterConfig.label.sold_out + '</span>',
  'productGridItemHtml': '<div class="grid__item grid__item--collection-template {{itemGridWidthClass}}">' +
                              '<script class="bc-sf-filter-product-script" data-id="bc-product-json-{{itemId}}" type="application/json">{{itemJson}}</script>' +
                              '<div class="grid-view-item {{itemSoldOutClass}} product-card">' +
                              /*FS added for wishlist icon*/
                              '<div class="ssw-faveiticon sswfaveicon{{itemId}}" style="z-index: 100;">' +
                                '<i data-product-id="{{itemId}}" data-count="0" class="ssw-icon-heart-o ssw-fave-icon ssw-wishlist-element ssw-not-synch"' +
                                  'data-params="{"product_id":"{{itemId}}","event":"fave_button","page":"product_profile"}"></i>' +
                                '<span class="faves-count">...</span>' +
                              '</div>' + 

  									'<a class="grid-view-item__link grid-view-item__image-container full-width-link" href="{{itemUrl}}">' +
                                  		'<span class="visually-hidden">{{itemTitle}}</span>' +
  									'</a>' +
                                  '{{imageStyle}}' +
                                  '{{itemImages}}' +
                                  '<div class="title_price">' +
                                    '<div class="h4 grid-view-item__title product-card__title"><a href="{{itemUrl}}">{{itemTitle}}</a></div>' +
  									'{{itemMeta}}' +
                                    '{{itemPrice}}' +
  								  '</div>' +
  								  '{{itemAddToCart}}' +
                              '</div>' +
                              
                          '</div>',

  // List Template
  'vendorSmallListHtml': '<div class="list-view-item__vendor-column small--hide"><div class="list-view-item__vendor">{{itemVendorLabel}}</div></div>',
  'vendorMediumListHtml': '<div class="list-view-item__vendor medium-up--hide">{{itemVendorLabel}}</div>',
  'saleLabelListHtml': '<div class="list-view-item__on-sale">' + bcSfFilterConfig.label.sale + '</div>',
  'soldOutLabelListHtml': '<div class="list-view-item__sold-out">' + bcSfFilterConfig.label.sold_out + '</div>',
  'productListItemHtml':  '<li href="{{itemUrl}}" class="list-view-item">' +
                              '<div class="product-card product-card--list">' +
                                  '<div class="list-view-item__link">' +
                                      '<div class="list-view-item__image-column">' +
                                          '<div class="list-view-item__image-wrapper">' +
                                              '<img class="list-view-item__image" src="{{itemThumbUrl}}" alt="{{itemTitle}}">' +
                                          '</div>' +
                                      '</div>' +
                                      '<div class="list-view-item__title-column">' +
                                          '<div class="list-view-item__title">{{itemTitle}}</div>' +
                                          '{{itemSaleLabel}}' +
                                          '{{itemMediumVendor}}' +
                                          '{{itemSoldOutLabel}}' +
                                      '</div>' +
                                      '{{itemSmallVendor}}' +
                                      '<div class="list-view-item__price-column">{{itemPrice}}</div>' +
                                  '</div>' +
                              '</div>' +
                          '</li>',

  // Pagination Template
  'previousActiveHtml': '<li><a href="{{itemUrl}}" class="btn btn--tertiary btn--narrow"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-left" viewBox="0 0 20 8"><path d="M4.814 7.555C3.95 6.61 3.2 5.893 2.568 5.4 1.937 4.91 1.341 4.544.781 4.303v-.44a9.933 9.933 0 0 0 1.875-1.196c.606-.485 1.328-1.196 2.168-2.134h.752c-.612 1.309-1.253 2.315-1.924 3.018H19.23v.986H3.652c.495.632.84 1.1 1.036 1.406.195.306.485.843.869 1.612h-.743z" fill="#000" fill-rule="evenodd"></path></svg><span class="icon__fallback-text">Previous</span></a></li>',
  'previousDisabledHtml': '<li><div class="btn btn--tertiary btn--narrow btn--disabled"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-left" viewBox="0 0 20 8"><path d="M4.814 7.555C3.95 6.61 3.2 5.893 2.568 5.4 1.937 4.91 1.341 4.544.781 4.303v-.44a9.933 9.933 0 0 0 1.875-1.196c.606-.485 1.328-1.196 2.168-2.134h.752c-.612 1.309-1.253 2.315-1.924 3.018H19.23v.986H3.652c.495.632.84 1.1 1.036 1.406.195.306.485.843.869 1.612h-.743z" fill="#000" fill-rule="evenodd"></path></svg><span class="icon__fallback-text">Previous</span></div></li>',
  'nextActiveHtml': '<li><a href="{{itemUrl}}" class="btn btn--tertiary btn--narrow"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-right" viewBox="0 0 20 8"><path d="M15.186.445c.865.944 1.614 1.662 2.246 2.154.631.491 1.227.857 1.787 1.098v.44a9.933 9.933 0 0 0-1.875 1.196c-.606.485-1.328 1.196-2.168 2.134h-.752c.612-1.309 1.253-2.315 1.924-3.018H.77v-.986h15.577c-.495-.632-.84-1.1-1.035-1.406-.196-.306-.486-.843-.87-1.612h.743z" fill="#000" fill-rule="evenodd"></path></svg><span class="icon__fallback-text">Next</span></a></li>',
  'nextDisabledHtml': '<li><div class="btn btn--tertiary btn--narrow btn--disabled"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-right" viewBox="0 0 20 8"><path d="M15.186.445c.865.944 1.614 1.662 2.246 2.154.631.491 1.227.857 1.787 1.098v.44a9.933 9.933 0 0 0-1.875 1.196c-.606.485-1.328 1.196-2.168 2.134h-.752c.612-1.309 1.253-2.315 1.924-3.018H.77v-.986h15.577c-.495-.632-.84-1.1-1.035-1.406-.196-.306-.486-.843-.87-1.612h.743z" fill="#000" fill-rule="evenodd"></path></svg><span class="icon__fallback-text">Next</span></div></li>',
  'paginateHtml': '<ul class="list--inline pagination clearfix">{{previous}}<li class="pagination__text">{{pageItems}}</li>{{next}}</ul>',

  // Sorting Template
  'sortingHtml': '<label class="filters-toolbar__label select-label">' + bcSfFilterConfig.label.sorting + '</label><div class="filters-toolbar__input-wrapper select-group"><select class="filters-toolbar__input">{{sortingItems}}</select><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-chevron-down" viewBox="0 0 498.98 284.49"><defs><style>.cls-1{fill:#231f20}</style></defs><path class="cls-1" d="M80.93 271.76A35 35 0 0 1 140.68 247l189.74 189.75L520.16 247a35 35 0 1 1 49.5 49.5L355.17 511a35 35 0 0 1-49.5 0L91.18 296.5a34.89 34.89 0 0 1-10.25-24.74z" transform="translate(-80.93 -236.76)"/></svg></div>',

  // Pagination Amount Template
  'showLimitHtml': '<label class="filters-toolbar__label select-label">Items per page</label><div class="filters-toolbar__input-wrapper select-group"><select class="filters-toolbar__input">{{showLimitItems}}</select><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-chevron-down" viewBox="0 0 498.98 284.49"><defs><style>.cls-1{fill:#231f20}</style></defs><path class="cls-1" d="M80.93 271.76A35 35 0 0 1 140.68 247l189.74 189.75L520.16 247a35 35 0 1 1 49.5 49.5L355.17 511a35 35 0 0 1-49.5 0L91.18 296.5a34.89 34.89 0 0 1-10.25-24.74z" transform="translate(-80.93 -236.76)"/></svg></div>',
};

BCSfFilter.prototype.buildProductGridItem = function(data) {
  /*** Prepare data ***/
  var images = data.images_info;
  // Displaying price base on the policy of Shopify, have to multiple by 100
  var soldOut = !data.available; // Check a product is out of stock
  var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
  var priceVaries = data.price_min != data.price_max; // Check a product has many prices
  // Get First Variant (selected_or_first_available_variant)
  var firstVariant = data['variants'][0];
  if (getParam('variant') !== null && getParam('variant') != '') {
    var paramVariant = data.variants.filter(function(e) {
      return e.id == getParam('variant');
    });
    if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
  } else {
    for (var i = 0; i < data['variants'].length; i++) {
      if (data['variants'][i].available) {
        firstVariant = data['variants'][i];
        break;
      }
    }
  }
  /*** End Prepare data ***/

  // Get Template
  var itemHtml = bcSfFilterTemplate.productGridItemHtml;

  // Add a specific class for grid item
  var itemGridWidthClass = '';
  var imageSize = '600x600';
  switch (bcSfFilterConfig.custom.products_per_row) {
    case 2:
      itemGridWidthClass = 'medium-up--one-half';
      imageSize = '540x600';
      break;
    case 3:
      itemGridWidthClass = 'small--one-half medium-up--one-third';
      imageSize = '345x550';
      break;
    case 4:
      itemGridWidthClass = 'small--one-half medium-up--one-quarter';
      imageSize = '250x';
      break;
    case 5:
      itemGridWidthClass = 'small--one-half medium-up--one-fifth';
      imageSize = '195x';
      break;
  }
  itemHtml = itemHtml.replace(/{{itemGridWidthClass}}/g, itemGridWidthClass);

  // Add soldOut class
  var itemSoldOutClass = soldOut ? bcSfFilterTemplate.soldOutClass : '';
  itemHtml = itemHtml.replace(/{{itemSoldOutClass}}/g, itemSoldOutClass);

  // Add soldOut label
  var itemSoldOutLabel = soldOut ? bcSfFilterTemplate.soldOutLabelGridHtml : '';
  itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabel);

  var imgId = 'ProductCardImage-' + data.id;
  var wrapperId = 'ProductCardImageWrapper-' + data.id;

  // Build Image style
  var imageStyle = buildImageStyle(data);
  itemHtml = itemHtml.replace(/{{imageStyle}}/g, imageStyle);

  // Add Images
  var aspect_ratio = '';
  var itemImagesHtml = '<div id="' + wrapperId + '" class="grid-view-item__image-wrapper js">';
  itemImagesHtml += '<div style="padding-top:';
  if (images.length > 0) {
    aspect_ratio = images[0]['width'] / images[0]['height'];
    itemImagesHtml += 1 / aspect_ratio * 100;
  } else {
    itemImagesHtml += 100;
  }
  itemImagesHtml += '%;">';
  itemImagesHtml += '<img id="' + imgId + '" ' +
    'class="grid-view-item__image lazyload" ' +
    'src="' + this.getFeaturedImage(images, '300x300') + '" ' +
    'data-src="' + this.getFeaturedImage(images, '{width}x') + '" ' +
    'data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" ' +
    'data-aspectratio="' + aspect_ratio + '" ' +
    'data-sizes="auto" ' +
    'alt="{{itemTitle}}">';
  itemImagesHtml += '</div>';
  itemImagesHtml += '</div>';

  var image_size = bcSfFilterConfig.custom.max_height + 'x' + bcSfFilterConfig.custom.max_height;
  var max_width = images.length > 0 ? bcSfFilterConfig.custom.max_height * aspect_ratio : 0;
  itemImagesHtml += '<noscript><img class="grid-view-item__image" src="' + this.getFeaturedImage(images, image_size + '@2x') + '" alt="{{itemTitle}}" style="max-width: ' + max_width + 'px;"></noscript>';
  itemHtml = itemHtml.replace(/{{itemImages}}/g, itemImagesHtml);

  // Add Vendor
  var itemVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorGridHtml : '';
  itemHtml = itemHtml.replace(/{{itemVendor}}/g, itemVendorHtml);

  // Add Price
  var itemPriceHtml = buildPrice(data, onSale, priceVaries);
  itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

  // Add data json
  var self = this;
  var itemJson = {
    "id": data.id,
    "title": data.title,
    "handle": data.handle,
    "vendor": data.vendor,
    "variants": data.variants,
    "url": self.buildProductItemUrl(data),
    "options_with_values": data.options_with_values,
    "images": data.images,
    "available": data.available,
    "price_min": data.price_min,
    "price_max": data.price_max,
    "compare_at_price_min": data.compare_at_price_min,
    "compare_at_price_max": data.compare_at_price_max
  };
  itemHtml = itemHtml.replace(/{{itemJson}}/g, JSON.stringify(itemJson));
  
  
  itemHtml = itemHtml.replace(/{{itemMeta}}/g, buildProductDescription(data));
  var itemAddToCartHtml = '<div class="MobileFormat">' +
                             '<div class="grid_quantBox">' +
                                          '<input type="button" value="<" class="qtyminusgrid" field="quantity" min="1" />' +
                                          '<input data-idGrid="' + firstVariant.id + '" type="text" name="quantity" value="1"  class="gridQuant" data-quantity-input>' +
                                          '<input type="button" value=">" class="qtyplusgrid" field="quantity" max="' + firstVariant.inventory_quantity + '" />' +     
                                     '</div>' +
                             '<div class="AjaxCartBtnGrid">Add to cart</div>' +
                            '</div>' +
                            '<div class="AjaxAddCArt DesktopFormat">' +
                              '<div class="CustomQunt">' +    
                              '<input data-id="' + firstVariant.id + '" type="text"  name="quantity" value="1"  class="QuantityBox" data-quantity-input>' +
                              '<div class="BothIcons">' +
                              '<input type="button" value=">" class="qtyplus" field="quantity" max="' + firstVariant.inventory_quantity + '" />' +
                              '<input type="button" value="<" class="qtyminus" field="quantity" min="1" />' + 
                           '</div>' +
                              '</div>' +
                            '<div class="AjaxCartBtn">Add to cart</div>' +
                            '</div>';
  itemHtml = itemHtml.replace(/{{itemAddToCart}}/g, itemAddToCartHtml);
  
  

  // Add main attribute
  itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
  itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
  itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
  itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

  return itemHtml;
}

function buildProductDescription(data) {
    var  html = '';
    if (bcsffilter.getProductMetafield(data, 'global', 'pro_description') !== null) {
        html = "<div class='CollMeta'>" + bcsffilter.getProductMetafield(data, 'global', 'pro_description') + "</div>";
    }
    return html;
}

BCSfFilter.prototype.buildFilterShowLimit = function() {
    if (bcSfFilterTemplate.hasOwnProperty('showLimitHtml')) {
        jQ('#bc-sf-filter-top-show-limit').html('');

        var numberList = '12,24,32,48';
        if (numberList != '') {
            // Build content
            var showLimitItemsHtml = '';
            var arr = numberList.split(',');
            for (var k = 0; k < arr.length; k++) {
                var label = arr[k];
                showLimitItemsHtml += '<option value="' + arr[k] +'">' + label + '</option>';
            }
            var html = bcSfFilterTemplate.showLimitHtml.replace(/{{showLimitItems}}/g, showLimitItemsHtml);
            jQ('#bc-sf-filter-top-show-limit').html(html);

            // Set value
            jQ('#bc-sf-filter-top-show-limit select').val(this.queryParams.limit);
        }
    }
};

// Build Image style
function buildImageStyle(data) {
  var images = data.images_info;
  var imgId = 'ProductCardImage-' + data.id;
  var wrapperId = 'ProductCardImageWrapper-' + data.id;
  var imageStyle = '';
  if (images.length > 0) {
    var image = images[0];
    var width = bcSfFilterConfig.custom.max_height;
    var height = bcSfFilterConfig.custom.max_height;
    var aspect_ratio = image.width / image.height;
    var small_style = true;
    var container_aspect_ratio = width * 1.0 / height;

    if (image.aspect_ratio < 1.0) {
      var maximum_width = height * aspect_ratio;
      if (image.height <= height) {
        var maximum_height = image.height;
        maximum_width = image.width;
      } else {
        var maximum_height = height;
      }
    } else if (aspect_ratio < container_aspect_ratio) {
      var maximum_height = height / aspect_ratio;
      if (image.height <= height) {
        var maximum_height = image.height;
        var maximum_width = image.width;
      } else {
        var maximum_height = height;
        var maximum_width = height * aspect_ratio;
      }
    } else {
      var maximum_height = height / aspect_ratio;
      if (image.width <= width) {
        maximum_height = image.height;
        var maximum_width = image.width
      } else {
        var maximum_width = width;
        maximum_height = maximum_width / aspect_ratio;
      }
    }

    imageStyle += '<style>';
    if (small_style) imageStyle += '@media screen and (min-width: 750px) {';
    imageStyle += '#' + imgId + ' {' +
      'max-width: ' + maximum_width + 'px;' +
      'max-height: ' + maximum_height + 'px;' +
      '}' +
      '#' + wrapperId + ' {' +
      'max-width: ' + maximum_width + 'px;' +
      'max-height: ' + maximum_height + 'px;' +
      '}';
    if (small_style) imageStyle += '}';

    if (small_style) {
      if (aspect_ratio < 1) {
        maximum_width = 750 * aspect_ratio;
      } else {
        if (image.width < 750) {
          maximum_width = image.width;
        } else {
          maximum_width = 750;
        }
      }
      imageStyle += '@media screen and (max-width: 749px) {'
      imageStyle += '#' + imgId + ' {' +
        'max-width: ' + maximum_width + 'px;' +
        'max-height: 750px;' +
        '}' +
        '#' + wrapperId + ' {' +
        'max-width: ' + maximum_width + 'px;' +
        '}';
      imageStyle += '}';
    }
    imageStyle += '</style>';
  }
  return imageStyle;
}


BCSfFilter.prototype.buildFilterOptionGeneralRangeSlider = function(sliderId, amountId, currentMin, currentMax, rangeMin, rangeMax, data) {
  var self = this;
  var slider = document.getElementById(sliderId);
  var sliderRange = data.hasOwnProperty('sliderRange') && data.sliderRange !== null ? parseInt(data.sliderRange) : 4;
  // BC-Custom
  var sliderStep = data.hasOwnProperty('sliderStep') && data.sliderStep !== null ? parseFloat(data.sliderStep) : 1;
  var sliderDelimiter = data.hasOwnProperty('sliderDelimiter') && data.sliderDelimiter !== null ? data.sliderDelimiter : '';
  var filterOptionRangeClass = this.class.filterOptionRange; // bc-sf-filter-option-range
  // Case: Slider is divided into multiple ranges
  var rangeDecimals = data.filterType.indexOf('price') > -1 ? this.getSettingValue('general.decimalPriceRange') : 0;
  if (sliderStep <= 0.1) rangeDecimals = 1;
  if (sliderStep <= 0.01) rangeDecimals = 2;
  if (sliderStep <= 0.001) rangeDecimals = 3;
  
  
  if (((rangeMax - rangeMin < sliderStep) || rangeMin == null || rangeMax == null) && this.getSettingValue('general.oneValueRangeSlider')) {
    rangeMin -= 0.0001, rangeMax += 0.0001;
    noUiSlider.create(slider, {
      start: [currentMin, currentMax],
      connect: true, // Display a colored bar between the handles
      behaviour: 'tap', // Move handle on tap, bar is draggable
      animate: true,
      animationDuration: 300,
      step: sliderStep,
      range: {
        'min': rangeMin,
        'max': rangeMax
      }
    });
    jQ(slider).attr('disabled', ' disabled');
  } else {
    // BC-Custom
    rangeMin = parseFloat(rangeMin.toFixed(rangeMin));
    rangeMax = parseFloat(rangeMax.toFixed(rangeDecimals));
    // Case: Slider is divided into multiple ranges
    if (sliderRange > 0) {
      var rangeArr = [];
      for (var i = 0; i < sliderRange; i++) {
        rangeArr.push(i * (100 / sliderRange));
      }
      rangeArr.push(100);
      noUiSlider.create(slider, {
        start: [currentMin, currentMax],
        connect: true, // Display a colored bar between the handles
        behaviour: 'tap', // Move handle on tap, bar is draggable
        animate: true,
        animationDuration: 300,
        step: sliderStep,
        range: {
          'min': rangeMin,
          'max': rangeMax
        },
        pips: {
          mode: 'positions',
          values: rangeArr,
          density: sliderRange,
          format: wNumb({
            decimals: rangeDecimals,
            thousand: sliderDelimiter,
            edit: function(value) {
              return parseFloat(value);
            }
          })
        }
      });
      if (!this.getSettingValue('general.enableSliderRuler')) jQ('#' + sliderId).addClass('no-ruler');
      jQ('#' + sliderId).addClass('has-pips');
      slider.noUiSlider.on('update', function() {
        var last_pips = jQ('#' + sliderId + ' .noUi-pips').find('.noUi-marker').last();
        if (last_pips.hasClass('noUi-marker-normal')) {
          last_pips.removeClass('noUi-marker-normal');
          last_pips.addClass('noUi-marker-large');
          last_pips.after('<div class="noUi-value noUi-value-horizontal noUi-value-large" style="left: 100.00000%">' + Math.ceil(rangeMax) + '</div>');
        }
      });
      // Case: Slider doesn't have range
    } else {
      noUiSlider.create(slider, {
        start: [currentMin, currentMax],
        connect: true, // Display a colored bar between the handles
        behaviour: 'tap', // Move handle on tap, bar is draggable
        animate: true,
        animationDuration: 300,
        step: sliderStep,
        range: {
          'min': rangeMin,
          'max': rangeMax
        }
      });
    }
    // Slide event
    this.slideEvent(sliderId, amountId, rangeMin, rangeMax, data);
    // onChange event for textboxes
    // When the Range has two textboxes (style1)
    if (this.getSettingValue('general.rangeStyle') == 'style1') {
      var amountMin = filterOptionRangeClass + '-amount-min', amountMax = filterOptionRangeClass + '-amount-max';
      // Format value for display
      var displayValue = this.customizeDisplayRangeValue(currentMin, currentMax, data.filterType, data);
      var displayMin = displayValue[0], displayMax = displayValue[1];
      jQ('#' + amountId).find('.' + amountMin).val(displayMin);
      jQ('#' + amountId).find('.' + amountMax).val(displayMax);
      // onChange event
      jQ('#' + amountId).on('change', '.' + amountMin, function() {
        var minValue = jQ(this).val();
        var maxValue = jQ('#' + amountId + ' .' + amountMax).val();
        slider.noUiSlider.set([minValue, maxValue]);
      });
      jQ('#' + amountId).on('change', '.' + amountMax, function() {
        var maxValue = jQ(this).val();
        var minValue = jQ('#' + amountId + ' .' + amountMin).val();
        slider.noUiSlider.set([minValue, maxValue]);
      });
    }
    // Set event
    this.setRangeValueEvent(sliderId, rangeMin, rangeMax, data);
  }
};


BCSfFilter.prototype.buildProductListItem = function(data) {
  /*** Prepare data ***/
  var images = data.images_info;
  // Displaying price base on the policy of Shopify, have to multiple by 100
  var soldOut = !data.available; // Check a product is out of stock
  var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
  var priceVaries = data.price_min != data.price_max; // Check a product has many prices
  // Get First Variant (selected_or_first_available_variant)
  var firstVariant = data['variants'][0];
  if (getParam('variant') !== null && getParam('variant') != '') {
    var paramVariant = data.variants.filter(function(e) {
      return e.id == getParam('variant');
    });
    if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
  } else {
    for (var i = 0; i < data['variants'].length; i++) {
      if (data['variants'][i].available) {
        firstVariant = data['variants'][i];
        break;
      }
    }
  }
  /*** End Prepare data ***/

  // Get Template
  var itemHtml = bcSfFilterTemplate.productListItemHtml;

  // Add onSale label
  var itemSaleLabel = onSale ? bcSfFilterTemplate.saleLabelListHtml : '';
  itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleLabel);

  // Add soldOut label
  var itemSoldOutLabel = soldOut ? bcSfFilterTemplate.soldOutLabelListHtml : '';
  itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabel);

  // Add Thumbnail
  var itemThumbUrl = images.length > 0 ? this.optimizeImage(images[0]['src'], '600x600') : bcSfFilterConfig.general.no_image_url;
  itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, itemThumbUrl);

  // Add Vendor
  var itemSmallVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorSmallListHtml : '';
  itemHtml = itemHtml.replace(/{{itemSmallVendor}}/g, itemSmallVendorHtml);
  var itemMediumVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorMediumListHtml : '';
  itemHtml = itemHtml.replace(/{{itemMediumVendor}}/g, itemMediumVendorHtml);

  // Add Price
  var itemPriceHtml = buildPrice(data, onSale, priceVaries);
  itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

  // Add main attribute
  itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
  itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
  itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

  return itemHtml;
}

function buildPrice(data, onSale, priceVaries) {
  var priceHtml = '',
    onSaleClass = onSale ? ' price--on-sale' : '';

  priceHtml += '<dl class="price' + onSaleClass + '" data-price>';
  // if (bcSfFilterConfig.custom.vendor_enable) {
  //   priceHtml += '<div class="price__vendor">';
  //   priceHtml += '<dt>';
  //   priceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.vendor + '</span>';
  //   priceHtml += '</dt>';
  //   priceHtml += '<dd>';
  //   priceHtml += data.vendor;
  //   priceHtml += '</dd>';
  //   priceHtml += '</div>';
  // }
  priceHtml += '<div class="price__sale">';
  priceHtml += '<dt>';
  priceHtml += '<span class="visually-hidden visually-hidden--inline">' + bcSfFilterConfig.label.sale_price + '</span>';
  priceHtml += '</dt>';
  priceHtml += '<dd>';
  priceHtml += '<span class="price-item price-item--sale" data-sale-price>';
  priceHtml += bcsffilter.formatMoney(data.price_min, bcsffilter.moneyFormat);
  priceHtml += '</span> ';
  //priceHtml += '<span class="price-item__label" aria-hidden="true">' + bcSfFilterConfig.label.sale + '</span>';
  priceHtml += '</dd>';
  priceHtml += '</div>';
  priceHtml += '<div class="price__regular">';
  priceHtml += '<dt>';
  priceHtml += '<span class="visually-hidden visually-hidden--inline">' + bcSfFilterConfig.label.regular_price + '</span>';
  priceHtml += '</dt>';
  priceHtml += '<dd>';
  priceHtml += '<span class="price-item price-item--regular" data-regular-price>';
  if (data.available) {
    if (onSale) {
      priceHtml += bcsffilter.formatMoney(data.compare_at_price_min, bcsffilter.moneyFormat);
    } else {
      priceHtml += bcsffilter.formatMoney(data.price_min, bcsffilter.moneyFormat);
    }
  } else {
    priceHtml += bcSfFilterConfig.label.sold_out;
  }
  priceHtml += '</span>';
  priceHtml += '</dd>';
  priceHtml += '</div>';
  priceHtml += '</dl>';

  return priceHtml;
}

// Build Pagination
BCSfFilter.prototype.buildPagination = function(totalProduct) {
  // Get page info
  var currentPage = parseInt(this.queryParams.page);
  var totalPage = Math.ceil(totalProduct / this.queryParams.limit);

  // If it has only one page, clear Pagination
  if (totalPage == 1) {
    jQ(this.selector.pagination).html('');
    return false;
  }

  if (this.getSettingValue('general.paginationType') == 'default') {
    var paginationHtml = bcSfFilterTemplate.paginateHtml;

    // Build Previous
    var previousHtml = (currentPage > 1) ? bcSfFilterTemplate.previousActiveHtml : bcSfFilterTemplate.previousDisabledHtml;
    previousHtml = previousHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage - 1));
    paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);

    // Build Next
    var nextHtml = (currentPage < totalPage) ? bcSfFilterTemplate.nextActiveHtml : bcSfFilterTemplate.nextDisabledHtml;
    nextHtml = nextHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage + 1));
    paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);

    // Build page items
    var currentPage = bcSfFilterConfig.label.current_page.replace(/{{ current }}/g, currentPage).replace(/{{ total }}/g, totalPage);
    paginationHtml = paginationHtml.replace(/{{pageItems}}/g, currentPage);

    jQ(this.selector.pagination).html(paginationHtml);
  }
};

// Build Sorting
BCSfFilter.prototype.buildFilterSorting = function() {
  if (bcSfFilterTemplate.hasOwnProperty('sortingHtml')) {
    jQ(this.selector.topSorting).html('');

    var sortingArr = this.getSortingList();
    if (sortingArr) {
      // Build content
      var sortingItemsHtml = '';
      for (var k in sortingArr) {
        sortingItemsHtml += '<option value="' + k + '">' + sortingArr[k] + '</option>';
      }
      var html = bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
      jQ(this.selector.topSorting).html(html);

      // Set current value
      jQ(this.selector.topSorting + ' select').val(this.queryParams.sort);
    }
  }
};

// Build Display type
BCSfFilter.prototype.buildFilterDisplayType = function() {
  var itemHtml = '<span>View As </span>';
  itemHtml += '<a href="' + this.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="bc-sf-filter-display-item bc-sf-filter-display-grid" data-view="grid"><span class="icon-fallback-text"><span class="fallback-text">Grid view</span></span></a>';
  itemHtml += '<a href="' + this.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="bc-sf-filter-display-item bc-sf-filter-display-list" data-view="list"><span class="icon-fallback-text"><span class="fallback-text">List view</span></span></a>';
  jQ(this.selector.topDisplayType).html(itemHtml);

  // Active current display type
  jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').removeClass('active');
  jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').removeClass('active');
  if (this.queryParams.display == 'list') {
    jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').addClass('active');
  } else if (this.queryParams.display == 'grid') {
    jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').addClass('active');
  }
};

// Add additional feature for product list, used commonly in customizing product list
BCSfFilter.prototype.buildExtrasProductList = function(data, eventType) {
    /* start-initialize-bc-al */
    var self = this;
    var alEnable = true;
    if(self.getSettingValue('actionlist.qvEnable') != '' || self.getSettingValue('actionlist.atcEnable') != ''){
      alEnable = self.getSettingValue('actionlist.qvEnable') || self.getSettingValue('actionlist.atcEnable');
    }
    if (alEnable === true && typeof BCActionList !== 'undefined') {
        if (typeof bcActionList === 'undefined') {
            bcActionList = new BCActionList();
        }else{
          if (typeof bcAlParams !== 'undefined' && typeof bcSfFilterParams !== 'undefined') {
              bcActionList.initFlag = false;
              bcActionList.alInit(bcSfFilterParams, bcAlParams);
          } else {
              bcActionList.alInit();
          }
        }
    }
    /* end-initialize-bc-al */
  var productSelector = jQ(this.selector.products);
  if (this.queryParams.display == 'list') {
    if (productSelector.children('.list-view-items').length == 0) {
      productSelector.children().wrapAll('ul class="list-view-items"/>');
    }
    productSelector.removeClass('grid grid--uniform grid--view-items');
  } else {
    if (productSelector.children('.list-view-items').length > 0) {
      productSelector.children('.list-view-items').children().unwrap();
    }
    productSelector.addClass('grid grid--uniform grid--view-items');
  }
};

// Build Additional Elements
BCSfFilter.prototype.buildAdditionalElements = function(data, eventType) {
  var totalProduct = '';
  if (data.total_product == 1) {
    totalProduct = bcSfFilterConfig.label.items_with_count_one.replace(/{{ count }}/g, data.total_product);
  } else {
    totalProduct = bcSfFilterConfig.label.items_with_count_other.replace(/{{ count }}/g, data.total_product);
  }
  jQ('#bc-sf-filter-total-product').html(totalProduct);
};

// Build Default layout
BCSfFilter.prototype.buildDefaultElements=function(){var isiOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,isSafari=/Safari/.test(navigator.userAgent),isBackButton=window.performance&&window.performance.navigation&&2==window.performance.navigation.type;if(!(isiOS&&isSafari&&isBackButton)){var self=this,url=window.location.href.split("?")[0],searchQuery=self.isSearchPage()&&self.queryParams.hasOwnProperty("q")?"&q="+self.queryParams.q:"";window.location.replace(url+"?view=bc-original"+searchQuery)}};

BCSfFilter.prototype.prepareProductData = function(data) { var countData = data.length; for (var k = 0; k < countData; k++) { data[k]['images'] = data[k]['images_info']; if (data[k]['images'].length > 0) { data[k]['featured_image'] = data[k]['images'][0] } else { data[k]['featured_image'] = { src: bcSfFilterConfig.general.no_image_url, width: '', height: '', aspect_ratio: 0 } } data[k]['url'] = '/products/' + data[k].handle; var optionsArr = []; var countOptionsWithValues = data[k]['options_with_values'].length; for (var i = 0; i < countOptionsWithValues; i++) { optionsArr.push(data[k]['options_with_values'][i]['name']) } data[k]['options'] = optionsArr; if (typeof bcSfFilterConfig.general.currencies != 'undefined' && bcSfFilterConfig.general.currencies.length > 1) { var currentCurrency = bcSfFilterConfig.general.current_currency.toLowerCase().trim(); function updateMultiCurrencyPrice(oldPrice, newPrice) { if (typeof newPrice != 'undefined') { return newPrice; } return oldPrice; } data[k].price_min = updateMultiCurrencyPrice(data[k].price_min, data[k]['price_min_' + currentCurrency]); data[k].price_max = updateMultiCurrencyPrice(data[k].price_max, data[k]['price_max_' + currentCurrency]); data[k].compare_at_price_min = updateMultiCurrencyPrice(data[k].compare_at_price_min, data[k]['compare_at_price_min_' + currentCurrency]); data[k].compare_at_price_max = updateMultiCurrencyPrice(data[k].compare_at_price_max, data[k]['compare_at_price_max_' + currentCurrency]); } data[k]['price_min'] *= 100, data[k]['price_max'] *= 100, data[k]['compare_at_price_min'] *= 100, data[k]['compare_at_price_max'] *= 100; data[k]['price'] = data[k]['price_min']; data[k]['compare_at_price'] = data[k]['compare_at_price_min']; data[k]['price_varies'] = data[k]['price_min'] != data[k]['price_max']; var firstVariant = data[k]['variants'][0]; if (getParam('variant') !== null && getParam('variant') != '') { var paramVariant = data[k]['variants'].filter(function(e) { return e.id == getParam('variant') }); if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0] } else { var countVariants = data[k]['variants'].length; for (var i = 0; i < countVariants; i++) { if (data[k]['variants'][i].available) { firstVariant = data[k]['variants'][i]; break } } } data[k]['selected_or_first_available_variant'] = firstVariant; var countVariants = data[k]['variants'].length; for (var i = 0; i < countVariants; i++) { var variantOptionArr = []; var count = 1; var variant = data[k]['variants'][i]; var variantOptions = variant['merged_options']; if (Array.isArray(variantOptions)) { var countVariantOptions = variantOptions.length; for (var j = 0; j < countVariantOptions; j++) { var temp = variantOptions[j].split(':'); data[k]['variants'][i]['option' + (parseInt(j) + 1)] = temp[1]; data[k]['variants'][i]['option_' + temp[0]] = temp[1]; variantOptionArr.push(temp[1]) } data[k]['variants'][i]['options'] = variantOptionArr } data[k]['variants'][i]['compare_at_price'] = parseFloat(data[k]['variants'][i]['compare_at_price']) * 100; data[k]['variants'][i]['price'] = parseFloat(data[k]['variants'][i]['price']) * 100 } data[k]['description'] = data[k]['content'] = data[k]['body_html']; if(data[k].hasOwnProperty('original_tags') && data[k]['original_tags'].length > 0){ data[k].tags = data[k]['original_tags'].slice(0); }} return data };


/**********Customize FS************ */
BCSfFilter.prototype.buildAdditionalElements = function(data, eventType) {

/***************** Quantity Box ON Collection PAGE **************************/
    $('.BothIcons .qtyplus').click(function(){
        var valuepluss = $(this).attr("max");
            
        var val_qty = parseInt($(this).parents(".BothIcons").prev(".QuantityBox").val());
            
        if(val_qty >= 0 &&  val_qty < valuepluss)
        {
              val_qty = val_qty + 1 ;
        }
      
        $(this).parents(".BothIcons").prev(".QuantityBox").val(val_qty);
    
    });
   
    $('.BothIcons .qtyminus').click(function(){
        var valueplus = $(this).attr("min");
            
        var val_qty = parseInt($(this).parents(".BothIcons").prev(".QuantityBox").val());
        if(val_qty > 1)
        {
          val_qty = val_qty - 1 ;
        }
      
        $(this).parents(".BothIcons").prev(".QuantityBox").val(val_qty);
      
    });
/************************** MOBILE AJAX GRID Qunatity Manage PRODUCT**************************************/

    $('.qtyplusgrid').click(function(){
   
      var valuepluss = $(this).attr("max");
          
          var val_qty = parseInt($(this).prev(".gridQuant").val());
           
       if(val_qty >= 0 &&  val_qty < valuepluss)
       {
             val_qty = val_qty + 1 ;
       }
     
         $(this).prev(".gridQuant").val(val_qty);
     
         });
     
          $('.qtyminusgrid').click(function(){
      var valueplus = $(this).attr("min");
          
          var val_qty = parseInt($(this).next(".gridQuant").val());
       if(val_qty > 1)
       {
             val_qty = val_qty - 1 ;
       }
     
         $(this).next(".gridQuant").val(val_qty);
     
   });
    /***************************** ADD TO CART ON GRID PRODUCT *********************/
    $(".AjaxCartBtn").click(function(){
      var GetQuant = $(this).prev(".CustomQunt").children(".QuantityBox").val();
      var IdVar = $(this).prev(".CustomQunt").children(".QuantityBox").attr("data-id");
      $.ajax({
      type: 'POST',
          url: '/cart/add.js',
          data: 'quantity=' + GetQuant + '&id=' + IdVar,
          dataType: 'json',
          success: function(line_item) { 
            location.href="/cart";
          },
          error: function(XMLHttpRequest, textStatus) {
            Shopify.onError(XMLHttpRequest, textStatus);
          }
        });
    
    })
    /************************** MOBILE AJAX GRID PRODUCT**************************************/
    $(".AjaxCartBtnGrid").click(function(){
      var quntityGet = $(this).prev(".grid_quantBox").children(".gridQuant").val();
      var IdGet = $(this).prev(".grid_quantBox").children(".gridQuant").attr("data-idGrid");
        $.ajax({
        type: 'POST',
            url: '/cart/add.js',
            data: 'quantity=' + quntityGet + '&id=' + IdGet,
            dataType: 'json',
            success: function(line_item) { 
              location.href="/cart";
            },
            error: function(XMLHttpRequest, textStatus) {
              Shopify.onError(XMLHttpRequest, textStatus);
            }
          });
      })
};

// Fix image url issue of swatch option
function getFilePath(fileName, ext, version) {
    var self = bcsffilter;
    var ext = typeof ext !== 'undefined' ? ext : 'png';
    var version = typeof version !== 'undefined' ? version : '1';
    var prIndex = self.fileUrl.lastIndexOf('?');
    if (prIndex > 0) {
        var filePath = self.fileUrl.substring(0, prIndex);
    } else {
        var filePath = self.fileUrl;
    }
    filePath += fileName + '.' + ext + '?v=' + version;
    return filePath;
}

BCSfFilter.prototype.getFilterData=function(eventType,errorCount){function BCSend(eventType,errorCount){var self=bcsffilter;var errorCount=typeof errorCount!=="undefined"?errorCount:0;self.showLoading();if(typeof self.buildPlaceholderProductList=="function"){self.buildPlaceholderProductList(eventType)}self.beforeGetFilterData(eventType);self.prepareRequestParams(eventType);self.queryParams["callback"]="BCSfFilterCallback";self.queryParams["event_type"]=eventType;var url=self.isSearchPage()?self.getApiUrl("search"):self.getApiUrl("filter");var script=document.createElement("script");script.type="text/javascript";var timestamp=(new Date).getTime();script.src=url+"?t="+timestamp+"&"+jQ.param(self.queryParams);script.id="bc-sf-filter-script";script.async=true;var resendAPITimer,resendAPIDuration;resendAPIDuration=2e3;script.addEventListener("error",function(e){if(typeof document.getElementById(script.id).remove=="function"){document.getElementById(script.id).remove()}else{document.getElementById(script.id).outerHTML=""}if(errorCount<3){errorCount++;if(resendAPITimer){clearTimeout(resendAPITimer)}resendAPITimer=setTimeout(self.getFilterData("resend",errorCount),resendAPIDuration)}else{self.buildDefaultElements(eventType)}});document.getElementsByTagName("head")[0].appendChild(script);script.onload=function(){if(typeof document.getElementById(script.id).remove=="function"){document.getElementById(script.id).remove()}else{document.getElementById(script.id).outerHTML=""}}}this.requestFilter(BCSend,eventType,errorCount)};BCSfFilter.prototype.requestFilter=function(sendFunc,eventType,errorCount){sendFunc(eventType,errorCount)};
