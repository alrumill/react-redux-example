var Developer = function(id, first, company, email){
    this.id = id;
    this.first = first;
    this.company = company;
    this.email = email;
}

Developer.toObj = function(result){
    return new Developer(result.id, result.first, result.company, result.email);
}

module.exports = Developer;