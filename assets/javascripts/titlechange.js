document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        normal_title = "(σ・∀・)σ欢迎～";
        document.title = '｡･ﾟﾟ･(>д<)･ﾟﾟ･｡别走呀！';
    } else document.title = normal_title;
});