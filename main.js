container1 = document.getElementById("items1");
container2 = document.getElementById("items2");

function load_boxes(){
    for (let i = 0; i < 52; i++) {
        const label = document.createElement("label");
        const box = document.createElement("input");
        const span = document.createElement("span");
        label.classList.add("label");
        span.classList.add("span")
        box.type = "checkbox";

        label.appendChild(box)
        label.appendChild(span)
        if (i <= 25) {
            container1.appendChild(label)
            
        } else {container2.appendChild(label)}
    }
}

function ten_years() {
    for (let i = 0; i < 10; i++) {
        load_boxes()

    }
}

ten_years()