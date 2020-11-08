#Não finalizado
def calc(values):
  tomadas = values[0].split(' ')
  equip = 1
  equip += [int(tomada) - 1 for tomada in tomadas]
#   for tomada in tomadas:
#     equip += int(tomada) - 1
  
  print(equip)


calc(["2 4 3 2"])
# calc(["6 6 6 6"])
# calc(["2 2 2 2"])
