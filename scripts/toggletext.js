var accordionButtons = document.getElementsByClassName("accordionButton");
var i;

for (i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight)
        {
            panel.style.maxHeight = null;
        }
        else
        {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}