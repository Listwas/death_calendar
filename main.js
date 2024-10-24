
function create_layout() {
    // create main element to contain the layout
    const main = document.createElement('main');
    main.classList.add('main');

    // loop to create two boxes 26x10 (one year have 52 weeks)
    for (let i = 0; i < 2; i++) {
        const items = document.createElement('div');
        items.classList.add(`items${i}`);
        document.body.appendChild(main);
        main.appendChild(items);

        // create boxes equvalent to ten years
        for (let i = 0; i < 10; i++) {
            for (let i = 0; i < 26; i++) {
                const div = document.createElement('div');
                div.classList.add("box_element");
                // append 26 boxes each item container
                if (i <= 25) {
                    items.appendChild(div);
                    
                } else {items.appendChild(div);}
            }
        }
        
    }

    // place separator on each ten years
    const hr = document.createElement('hr');
    document.body.appendChild(hr);
    
}

function generate_by_years() {
    // get birthday and years from local storage
    const years = localStorage.getItem("years");
    if (!years || years === undefined) {
        window.location = "/birthday.html";
    } 

    const real_years = years.split(0, 1);
    

    for (let i = 0; i < real_years; i++) {
        create_layout();
    } 
}

function birthday() {
    const date = new Date();
    
    const birthday = new Date(document.getElementById("birthday").value);

    const diff_in_months = date - birthday;
    const diff_in_days = diff_in_months / (1000 * 60 * 60 * 24);
    const diff_in_weeks = diff_in_days / 7;
    
    console.log(diff_in_weeks)
    localStorage.setItem("brithday", diff_in_weeks);
    if (!diff_in_weeks || diff_in_weeks <= 0) {
        alert("set your birthday!");
        window.location = "/birthday.html";
    } else {window.location = "/how_long.html";}
}

function modify_years(years) {
    const element = document.getElementById("years");
    let int_el = parseInt(element.textContent);
    int_el += years;

    const sub_ten = document.getElementById("sub_ten");
    const add_ten = document.getElementById("add_ten");

    localStorage.setItem("years", int_el);

    if (int_el >= 100) {
        add_ten.disabled = true;
        sub_ten.disabled = false;
    } else if (int_el <= 10) {
        add_ten.disabled = false;
        sub_ten.disabled = true;
    } else {
        add_ten.disabled = false;
        sub_ten.disabled = false;
    }

    element.innerText = int_el; 
}


