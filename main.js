
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
                if (i <= 25) {
                    items.appendChild(label)
                    
                } else {items.appendChild(label)}
            }
        }
        
    }
            
    const hr = document.createElement('hr');
    document.body.appendChild(hr)
    
}

create_layout()


