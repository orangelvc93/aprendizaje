import os
os.system("clear")

cliente = {
    "Nombre": "Orangel",
    "Apellido": "Valdespino",
    "Peso": 75,
    "Talla": 1.70,
    "Gustos": ["ropa", "motos", "libros"],
    "Familiares": {"madre": "Rosa", "padre": "Orangel"}
}
print(cliente)

consulta = cliente["Apellido"]
print(consulta)
# Traer un indice de un diccionario
print(cliente["Gustos"][2])
print(cliente["Familiares"]["madre"].upper())

# Modificar valores
cliente["Peso"] = "74"
print(cliente)

# Imprimir las llaves
print(cliente.keys())
# Imprimir Valores
print(cliente.values())