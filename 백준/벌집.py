n = int(input())
past_circle = 0
circle = 1
circle_count = 1
dis = 0
checker = ""
while checker != n:
    for i in range(past_circle+1,circle+1):
        if n == i:
            checker = n
            break
    dis += 1
    past_circle = circle
    circle += 6*circle_count
    circle_count += 1
        
         
print(dis)