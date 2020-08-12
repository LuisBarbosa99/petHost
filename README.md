PetHost
=======

Um projeto de uma API para tornar a vida de donos de pet mais fácil, fornecendo-lhes uma hospedagem para seus melhores amigos, a partir de pessoas que se disponibilizam a cuidar de pets por alguns dias por um preço baixo.

*A project of an API to make life easier for pet owners, providing them an accomodation for their best friends, from people who make themselves available to take care of pets for a few days for a low price.*

Como usar a API:
---------------

1. Criar um usuário('/users')
    
    Parâmetros:

    * email
    * username
    * senha

2. Criar um pet para esse usuário ('/_username_/pets)

    Parâmetros:
    * username do dono (_request.body_)
    * nome do pet
    * tipo (gato, cachorro, papagaio)
    * bio (descrição do pet, alergias, recomendações)

    
3. Criar outro usuário, e em seguida torná-lo em um anfitrião ('/hosts')

    Para tornar um usuário em um anfitrião, passar os parâmetros:

    * username
    * bio (descrição do anfitrião, se tem pets, se tem espaço para os pets brincarem, etc)

4. Criar uma reserva ('_username_/bookings')

    Parâmetros:

    * username do dono (_request.body_)
    * id do pet
    * username do anfitrião 
    * data da reserva (inicial e final)
    * descrição 

