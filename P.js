class P{
    constructor()
    {
    }

    update(n)
    {
        database.ref('name').set({
            name: n
        });
    }
    updatepw(p)
    {
        database.ref('password').set({
            password: p
        })
    }
}