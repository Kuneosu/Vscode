# 1. 정수 n 을 입력 받는다.
# 2. O와 X로 이루어진 문자열을 n 번 입력 받는다.
# 3. O가 연속해서 나오면 숫자를 1씩 올리고 X가 나오면 0으로 초기화 하는 변수를 생성한다. (score)
# 4. 입력받은 문자열들을 score 변수를 통해 분석하고 각각의 점수를 출력한다.

# 1
n = int(input())

# 2 
result = []
for i in range(n):
    a = input()
    result.append(a)
    
# 3,4

for i in range(n):
    score = 0
    score_sum = 0
    for a in result[i]:
        if a == 'O':
            score += 1
        elif a == 'X':
            score = 0
        score_sum += score
    print(score_sum)
        