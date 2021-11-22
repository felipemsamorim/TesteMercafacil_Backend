# MERCAFACIL (teste backend) 
API example using sequelize ORM, MySQL and PostGreSQL

## ROUTES:

## (login para receber o token macapa)
localhost:3000/api/macapa/user/login

ex. de req.:{"name":"fmamorim","password":"123456"}

## (demais requisições)
### Adicionar authorization com o token recebido anteriormente
localhost:3000/api/macapa/contacts/

## (login para receber o token varejao)
localhost:3000/api/varejao/user/login

ex. de req.:{"name":"fmamorim","password":"123456"}
## (demais requisições)
### Adicionar authorization com o token recebido anteriormente
localhost:3000/api/varejao/contacts/

