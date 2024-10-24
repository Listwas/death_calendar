
function years() {
    const years = document.getElementById("years").value;
    localStorage.setItem("years", years)
    console.log(years)
}

function birthday() {
    const birthday = document.getElementById("birthday").value;
    localStorage.setItem("brithday", birthday)
    console.log(birthday)
}

function create_layout() {
    // create main element to contain the layout
    const main = document.createElement('main');
    main.classList.add('main');

    // loop to create two boxes 26x10 (one year have 52 weeks)
    for (let i = 0; i < 2; i++) {
        const items = document.createElement('div');
        items.classList.add(`items${i}`)
        document.body.appendChild(main)
        main.appendChild(items);

        // create boxes equvalent to ten years
        for (let i = 0; i < 10; i++) {
            for (let i = 0; i < 26; i++) {
                const label = document.createElement("label");
                const box = document.createElement("input");
                const span = document.createElement("span");
                label.classList.add("label");
                span.classList.add("span")
                box.type = "checkbox";
        
                label.appendChild(box)
                label.appendChild(span)

                // append 26 boxes each item container
                if (i <= 25) {
                    items.appendChild(label)
                    
                } else {items.appendChild(label)}
            }
        }
        
    }

    // place separator on each ten years
    const hr = document.createElement('hr');
    document.body.appendChild(hr)
    
}

function generate_by_years() {
    // get birthday and years from local storage
    const years = localStorage.getItem("years");
    const real_years = years.split(0, 1)

    for (let i = 0; i < real_years; i++) {
        create_layout()
    } 
}