# Preguntar nombre y cuanto han vendido en el mes
# El programa debe decir ok *nombre de la persona. este mes ganaste $650* 
# se debe calcular el 13% del numero que ha ingresado el usuario se multiplica por 13 y se divide entre 100
# asegurar que el resultado no tenga mas de 2 decimales

nombre = input('Cual es tu nombre: ')
ventaMes = int(input('Cuanto has vendido al mes?: '))
ganancia = round((ventaMes*13)/100 , 2)

print(f'Ok {nombre}. Este mes tu ganancia fue de {ganancia}$, Felicidades!')