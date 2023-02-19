n = int(input())
age = ""
n = str(n)
for i in n :
    age += chr(ord(i)+49)
    
print(age)