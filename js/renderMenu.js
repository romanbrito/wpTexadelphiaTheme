var Menu = (function ($) {
    // menu_type: House or Catering
    function renderMenu(menu_type, label, name, menuArr) {

        var output = '';

        output += '<div class="modal fade" id="' + label + menu_type + 'Modal' + '" role="dialog">';
        output += '<div class="modal-dialog modal-lg">';
        output += '<div class="modal-content">';
        output += '<div class="modal-header">';
        output += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
        output += '<p class="modal-title">' + name + ' ' + menu_type + ' Menu<a href="../wp-content/themes/texsite/pdf/' + menu_type + '_' + label + '.pdf" target="_blank"><i class="fa fa-print" aria-hidden="true"></i></a></p>';
        output += '</div>';
        output += '<div class="modal-body">';
        output += '<div class="smaller-screen-locations">';

        menuArr.map(function (menuUrl) {
            return output += '<img src="../wp-content/themes/texsite/images/' + menuUrl + '.jpg" alt="' + menuUrl + ' menu" width="100%"> <p></p>';
        });

        output += '</div>';
        output += '<div class="large-screen-locations">';
        output += '<object rel="pdf-' + menu_type + '-' + label + '" id="' + label + '-' + menu_type + '-pdf" class="pdf-image" type="application/pdf" data="../wp-content/themes/texsite/pdf/' + menu_type + '_' + label + '.pdf" style="width: 100%">';
        output += 'Your browser does not support objects';
        output += '</object>';
        output += '</div>';
        output += '</div>';
        output += '<div class="modal-footer">';
        output += '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        output += '</div>';
        output += '</div>';
        output += '</div>';
        output += '</div>';

        $('#menus').html(output);
    }

    return {
        renderMenu: renderMenu
    };


})(jQuery);
