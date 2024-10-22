container = document.getElementById("items1");

function load_boxes(){
    for (let i = 0; i < 53; i++) {
        const label = document.createElement("label");
        const box = document.createElement("input");
        const span = document.createElement("span");
        label.classList.add("label");
        span.classList.add("span")
        
        if (i === 26) {
            span.classList.add("middle_box")
        } else {box.type = "checkbox";}
        container.appendChild(label)
        label.appendChild(box)
        label.appendChild(span)

    }
}

function ten_years (){
    for (let i = 0; i < 10; i++) {
        load_boxes()
    }
}

ten_years()

