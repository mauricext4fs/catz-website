/**
 * @author Maurice Courtois
 */
window.onload = function() {
    initEvent = function() {
        var elMenuCheckBox = document.getElementById("menuHamburger");
        elMenuCheckBox.onclick = function() {
            var elMenu = document.getElementById('menuHamburgerContent');
            var elStyle = elMenu.style;
            if (elStyle.display == "none" || elStyle.display == "") {
                elStyle.display = "block";
            } else {
                elStyle.display = "";
            }
            console.log("lolo");
            return false;
        };
        console.log("vlad????");
    };

    initEvent();
};
