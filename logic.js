class Game {
    dataBase = {}
    SignUp() {
        if (localStorage.getItem('userdata') != null) {
            this.getData()
        }
        let username = Name.value;
        let email = inputemail.value;
        let password = inputpassword.value;
        let userre = reenter.value;
        if (username !== '' && email !== '' && password !== '' && userre !== '') {
            if (email in this.dataBase) {
                alert(`${email} already exist`)
            }
            else {
                this.dataBase[email] = {
                    name: username,
                    email: email,
                    password: password
                }
                this.saveData();
                alert("Registration successfull")
                window.location="signin.html"

            }
        }


        else {
            alert("please enter values")
        }
    }
    getData() {
        this.dataBase = JSON.parse(localStorage.getItem('userdata'))
    }
    saveData(){
        localStorage.setItem("userdata",JSON.stringify(this.dataBase))
    }
}
const obj = new Game();