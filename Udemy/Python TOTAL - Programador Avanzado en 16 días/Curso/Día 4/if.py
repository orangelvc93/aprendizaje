mascota = "perro"

if mascota == "gato":
    print("Es un gato")
elif mascota == "perro":
    print("Es un perro")
else:
    print("No se que animal es")

#===========================================

edad = 16
calificacion = 7

if edad < 18:
    print("Eres menor de edad")
    if calificacion >= 7:
        print("Aprobado")
    else:
        print("No aprobado")
else:
    print("Eres adulto")