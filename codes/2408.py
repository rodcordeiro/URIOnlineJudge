# -*- coding: utf-8 -*-
lines=["4 5 6"]
lines2=["10 5 9"]
lines3=["1 20 39"]

def secondChamp(lines):
    values = lines[0].split(' ')
    points = [int(score) for score in values]
    scores = [max(points),min(points)] 
    second = 0
    for point in points:
        second = point if point  not in scores else second
    return second    

print(secondChamp(lines))
print(secondChamp(lines2))
print(secondChamp(lines3))


# PEGO NO GOOGLE, ESTE FUNCIONOu
p = [int(x) for x in input().split()]
print(sorted(p)[1])
