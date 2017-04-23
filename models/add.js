var db = require('../db')

function NewProject(_name, _description, _url_site, _url_api, _email){
    this.name = _name;
    this.description = _description;
    this.url_site = _url_site;
    this.url_api = _url_api;
    this.email = _email;
    this.add_date = new Date().toString();
}

module.exports.addNewProjectToDb = function(request){
    //добавить валидацию данных
    db.get().collection('projects').insert(new NewProject(request.project_name,request.description,request.url_site,request.url_api,request.email));
}
