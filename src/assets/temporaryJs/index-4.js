$(function() {
    var $lis = $('.hover-common');
    var $tabCons = $('.building img');
    var $div = $('.face-bui-info');
    $lis.each(function(i) {
        $(this).hover(function() {
            $($tabCons[i]).css('opacity', '1');
        }, function() {
            $($tabCons[i]).css('opacity', '0');
        });
        $(this).click(function() {
            $div.css('display', 'block');
        });
    });

});
$(function() {
    var $click = $('face-bui-info .quxiao');
    var $div = $('.face-bui-info');
    $click.click(function() {
        $div.css('display', 'none');
    })

});
$(function() {
    var $click = $('.alert2');
    var $div = $('.face-bui-info');
    var $peopleInfo = $('.face-people-info');
    var $people_quxiao = $('.face-people-info .quxiao');
    $click.click(function() {
        $div.css('display', 'none');
        $peopleInfo.css('display', 'block');
    })

});
$(function() {
    var $peopleInfo = $('.face-people-info');
    var $people_quxiao = $('.face-people-info .quxiao');
    $people_quxiao.click(function() {
        $peopleInfo.css('display', 'none');
    })

});
$(function() {
    var $click = $('.alert3');
    var $div = $('.face-bui-info');
    var $jiankong_info = $('.face-jinkong-info');
    $click.click(function() {
        $jiankong_info.css('display', 'block');
        $div.css('display', 'none');
    })

});
$(function() {
    var $quxiao = $('.face-bui-info .quxiao');
    var $div = $('.face-bui-info');
    var $jiankong_info = $('.face-jinkong-info');
    $quxiao.click(function() {
        // $jiankong_info.css('display', 'block');
        $div.css('display', 'none');
    })

});
$(function() {
    var $quxiao = $('.face-jinkong-info .quxiao');
    // var $div = $('.face-bui-info');
    var $jiankong_info = $('.face-jinkong-info');
    $quxiao.click(function() {
        // $jiankong_info.css('display', 'block');
        $jiankong_info.css('display', 'none');
    })

});

function chartW() {
    var chartsW = $('.data-main').width() / 7;
    var middleW = chartsW * 3;
    var L_and_r = chartsW * 2;
    var chartH = ($('.data-main').height() - 160) / 3;
    $('.data-middle').width(middleW);
    $('.data-left').width(L_and_r);
    $('.data-right').width(L_and_r);
    $('.data-chart').height(chartH);
    console.log(middleW);
    console.log($('.data-left').width())

}
window.onresize = function() {
    chartW();
}
chartW();