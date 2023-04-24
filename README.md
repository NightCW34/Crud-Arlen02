# API REST DE TIENDA DE LAPTOPS

<img src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*Ij4wyJ4yMq_0Vm_U.png" alt="Postman" width="400" height="150">

```typescript

##PETICIONES POSTMAN CLIENTES

POST /clients - Crea un nuevo cliente
GET /clients - Obtiene todos los clientes
GET /clients/:id - Obtener un cliente por su ID
PUT /clients/:id - Actualiza un cliente por su ID
DELETE /clients/:id - Eliminar un cliente por su ID

##Estructura del JSON

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "1234567890",
  "address": "123 Main St",
  "birthdate": "1990-01-01",
  "postalCode": "12345",
  "gender": "male"
}

##PETICIONES POSTMAN COMPUTADORAS

POST /computers - Crear una nueva computadora
GET /computers - Obtener todas las computadoras
GET /computers/:id -  Obtiene una computadora segun su ID
PUT /computers/:id - Actualizar una computadora segun su ID
DELETE /computers/:id - Elimina una computadora segun su ID

##Estructura del JSON

{
    "marca": "Lenovo",
    "modelo": "Legion",
    "precio": 1000,
    "descripcion": "Laptop de alto rendimiento"
}
```
