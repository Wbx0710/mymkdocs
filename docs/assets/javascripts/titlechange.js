document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        normal_title = "Bixing's Notes٩(๑òωó๑)۶";
        document.title = '别走呀！｡･ﾟﾟ･(>д<)･ﾟﾟ･｡';
    } else document.title = normal_title;
});