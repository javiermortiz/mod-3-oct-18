document.addEventListener("DOMContentLoaded", e => {
    console.log(e.type);
    // phase 1
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");

    const myFunc = () => {
        modal.style.display = "flex";
        modalContent.style.display = "flex";
        modalContent.innerHTML = `
            <h2>Subscribe to our newsletter</h2>
            <form id="my-form" action="/users" method="POST">
                <label for="email">Email</label>
                <input type="text" name="email">
                <button>Submit</button>
            </form>
        `;

        // phase 4
        const form = document.getElementById("my-form");
        
        form.addEventListener("submit", e => {
            const inputVal = document.querySelector("input").value;
            if (!inputVal.includes('@') || !inputVal.includes('.com')) {
                e.preventDefault();
                alert('Invalid email');
                document.querySelector("input").value = '';
            }


        });

        // input vs change
        const input = document.querySelector("input");
        input.addEventListener('input', ev => {
            console.log(ev.type);
        });

        input.addEventListener('change', ev => {
            console.log(ev.type);
        });
        // document.getElementById("click-me").removeEventListener("click", myFunc)
    }

    document.getElementById("click-me").addEventListener("click", myFunc);

    // phase 2
    modal.addEventListener("click", e => {
        console.log(e.target);
        console.log(e.currentTarget);
        modal.style.display = "none";
    });

    // phase 3
    modalContent.addEventListener("click", e => {
        e.stopPropagation();
    });


    
}); 



