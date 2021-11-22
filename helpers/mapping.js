const TYPE = {
    MACAPA:'MACAPA',
    VAREJAO:'VAREJAO'
}

const transformContact = (type,contact) => {
    if(type == TYPE.MACAPA)
    return{
        nome : contact.name.toUpperCase(),
        celular: contact.cellphone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4")
    }

    return{
        nome : contact.name,
        celular: contact.cellphone
    }

}
module.exports = {
    transformContact,
    TYPE
}