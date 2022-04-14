var imgs = [];
        var index = 1;
        for(var i = 1; i <= 4; i++) {
            imgs[i] = new Image();
            imgs[i].src = "img/banner"+i+".jpg";
        }
        function next() {
            index++;
            if(index >= imgs.length) {
                index = 1;
            }
            var img = document.getElementById("img");
            img.src = imgs[index].src
            var slide = index + "/4";
            document.getElementById("slide__count").innerHTML = slide;
        }
        function prev() {
            index--;
            if(index < 1) {
                index = imgs.length -1
            }
            var img = document.getElementById("img");
            img.src = imgs[index].src
            var slide = index + "/4";
            document.getElementById("slide__count").innerHTML = slide;

        }