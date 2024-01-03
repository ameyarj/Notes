exports.homepage = async (req, res) => {
    const locals = {
        title: "Notes",
        description: "Simple Notes app",
    }
    res.render('index',{
        locals,
        layout: '../views/layouts/front-page'
    });
}

exports.about = async (req, res) => {
    const locals = {
        title: "About Notes",
        description: "About Simple Notes app",
    }
    res.render('about',locals);
}