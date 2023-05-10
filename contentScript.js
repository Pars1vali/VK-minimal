window.onload = init;
function init() {
    let arr_l = [
        "l_nwsf",
        "l_ap",
        "l_svd",
        "l_ca",
        "l_fr",
        "l_gr",
        "l_ph",
        "l_aud",
        "l_vid",
        "l_mk",
        "l_stickers",
        "l_mini_apps",
        "l_vkp",
        "l_fav",
        "l_doc",
        "l_ads",
        "react_rootEcosystemServicesNavigationEntry",
    ];

    if (
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        for (const element of arr_l) {
            document.getElementById(element).innerHTML = ``;
        }
    }

    let bodyList = document.querySelector("body");

    let observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                )
            ) {
                document.getElementsByClassName(
                    "upanel bl_cont "
                )[0].innerHTML = ``;
            } else {
                document.getElementById("main_feed").innerHTML = ``;
                document.getElementById("narrow_column").innerHTML = ``;
            }
        });
    });

    let config = {
        childList: true,
        subtree: true,
    };

    observer.observe(bodyList, config);
}
