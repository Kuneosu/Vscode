# 삼각형 세 변의 길이 a,b,c
# 주어진 값 -> a,b
# 구해야할 값 c 가 될 수있는 수의 개수
# 삼각형 조건 - 가장 긴 변이 나머지 두 변의 합보다 작은 수여야 한다.

# case 1 : a 와 b 가 같을때
# 1-1 : c 도 같은 경우
# a = b = c ( count = 1 )

# 1-2 : c 가 가장 긴 변
# a+b > c and c > a ( count =
# for c in range(a+1.a+b):
#   count += 1 )

# 1-3 : c 가 가장 짧은 변
# a+c > b , a > c ( count = 
# for c in range(a-1,0,-1):
#   if a+c > b :
#       count+=1 )

# case 2 : b 보다 a 가 클 때 ( = a 보다 b 가 클 때 )
# 2-1 : c 가 가장 긴변
# c > a > b , a+b > c ( count = 
# for c in range(a+1,a+b):
#   count += 1 )

# 2-2 : c 가 가장 짧은변
# a > b > c , b+c > a ( count =
# for c in range(b-1,0,-1):
#   if b+c > a :
#       count += 1 )

# 2-3 : c 가 긴 변과 짧은 변 사이
# a > c > b , c+b > a ( count = 
# for c in range(b+1,a):
#   if c+b > a: 
#       count += 1 )

# 2-4 : c 와 가장 긴 변이 같을 때
# a = c > b , a+b > c ( count = 1 )

# 2-5 : c 와 가장 짧은 변이 같을 때
# a > b = c , b+c > a ( count = 1 )