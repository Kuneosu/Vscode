s = input()
time = 0
two = ["A","B","C"]
three = ["D","E","F"]
four = ["G","H","I"]
five = ["J","K","L"]
six = ["M","N","O"]
seven = ["P","Q","R","S"]
eight = ["T","U","V"]
nine = ["W","X","Y","Z"]
for i in s:
    if i in two :
        time += 3
    elif i in three :
        time += 4
    elif i in four :
        time += 5
    elif i in five :
        time += 6
    elif i in six :
        time += 7
    elif i in seven :
        time += 8
    elif i in eight:
        time += 9
    elif i in nine :
        time += 10
    else :
        time += 2
    
print(time)