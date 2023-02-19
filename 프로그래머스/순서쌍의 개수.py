number = 100
cnt = 0
i=1
while(i*i <= number):
    if(i*i == number):
        cnt += 1
    elif (number % i == 0):
        cnt += 2
    i += 1

print(cnt)