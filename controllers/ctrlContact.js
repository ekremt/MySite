module.exports.index =function (req,res) {

    res.render('contact');
    
};

const Contact=require('../model/contact');

module.exports.post = async function (req,res) {
    var name = req.body.name; 
    var email  = req.body.email; 
    var subject  = req.body.subject; 
    var message  =req.body.message; 
    var contactData={ 
        name: name,
        email:email,
        subject:subject,
        message:message
    };

    const newContact = await Contact.build(contactData);
    await newContact.save();

    res.render('contact',contactData);
  
    
};
