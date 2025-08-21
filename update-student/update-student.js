document.querySelector("#searchBtn").addEventListener("click", (event)=>{

    let name = document.querySelector("#name").value;
    let fathername = document.querySelector("#fathername").value;
    if(!name && !fathername){
        event.preventDefault();
        alert("At least one field is required");
        return;
    }
    if(name && fathername){
        event.preventDefault();
        alert("please enter either name or fathername");
        document.querySelector("form").reset();
        return;
    }
    this.Submit();
})