async function getToken(username, password) {
    const option = {
        method: "POST"
    }
    const res = await fetch("http://localhost:8080/api/login/signin?username=" + username + "&password=" + password, option);

    const data = await res.json();

    localStorage.setItem('token', data.data)
    console.log("localStorage: " + localStorage.getItem('token'))
    return data.data

}


$(document).ready(function() {

    $('#sunmit-login').click(function() {
        const username = document.getElementById("email").value
        const password = document.getElementById("password").value
        getToken(username, password)
    })
})
$(document).ready(function (){
    $.ajax({
        method: 'GET',
        url: `http://localhost:8080/api/category/getAll`,
    }).done(function (data){
        console.log(data)
        if(data.data != null){
            for (const i in data.data){

                let stt = Number(Number(i)+1)
                const html = `<li class="mega-dropdown-li">
                                                <ul class="mega-dropdown-ul">
                                                    <li class="dropdown-li"><a class="dropdown-link2"
                                                            href="cart.html">${data.data[i]["name"]}</a>
                                                    </li>                                         
                                                </ul>
                                </li>`
                $('#show-login').append(html)

            }
        }
    })
})