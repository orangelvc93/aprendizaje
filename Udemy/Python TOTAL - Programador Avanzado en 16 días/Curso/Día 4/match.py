# Match es la variante de swich en otros lenguajes
serie = "N-02"

"""
if serie == "N-01":
    print("Samsung")
elif serie == "N-02":
    print("Nokia")
elif serie == "N-03":
    print("Motorola")
else:
    print("No Existe el producto")
"""

# Mismo ejemplo con Match


match serie:
    case "N-01":
        print("Samsung")
    case "N-02":
        print("Nokia")
    case "N-03":
        print("Motorola")
    case _:
        print("No Existe el producto")


# Ejemplo mas practico =============================

cliente = {"nombre": "Orangel", "edad": 30, "ocupacion": "programador"}

pelicula = {
    "titulo": "Matrix",
    "ficha_tecnica": {
        "protagonista": "Keanu Reeves",
        "director": "Lana y Lully Wachowski",
    },
}

elementos = [cliente, pelicula, "libro"]

for e in elementos:
    match e:
        case {"nombre": nombre, "edad": edad, "ocupacion": ocupacion}:
            print("esto es un cliente")
            print(nombre, edad, ocupacion)
        case {
            "titulo": titulo,
            "ficha_tecnica": {"protagonista": protagonista, "director": director},
        }:
            print("esto es una pelicula")
            print(titulo, protagonista, director)
        case _:
            print("No se que es esto")
