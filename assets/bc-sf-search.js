// Override Settings
var bcSfSearchSettings = {
    search: {
        //suggestionMode: 'test',
        //suggestionPosition: 'left'
    }
};

// Customize style of Suggestion box
BCSfFilter.prototype.customizeSuggestion = function(suggestionElement, searchElement, searchBoxId) {
};

// Build number of Search result
BCSfFilter.prototype.buildSearchResultNumber = function(data) {
    var content = '';
    var searchTerm = this.escape(this.getSearchTerm());
    if (searchTerm != null) {
        var content = bcSfFilterConfig.label.search_result_number_other;
        if (data.total_product <= 1) {
            var content = bcSfFilterConfig.label.search_result_number_one;
        }
        content = content.replace(/{{ count }}/g, data.total_product).replace(/{{ terms }}/g, searchTerm);
    }
    jQ('.' + this.class.searchResultNumber).html(content);
};