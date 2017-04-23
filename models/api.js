var db = require('../db')


function InfoResponseModel(doc){
    this.name = doc.name
    this.description = doc.description
    this.url_site = doc.url_site
    this.url_api = doc.url_api + '/content'
}

exports.info = function(res){

    db.get().collection('projects').find().toArray(function(err,docs){
        if(err){

            res.status(404)
            res.send('Error')

        }else{

            var result = new Array()

            for (var i = 0; i < docs.length; i++)
                result[i] = new InfoResponseModel(docs[i])

            res.setHeader("Content-Type", "application/json")
            res.send(result)
        }

    })
}
