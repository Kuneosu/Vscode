'''
1. 정수 c 를 입력 받는다.
2. 리스트 nums 에 문자열을 c 개 입력 받는다. 이때 문자열은 학생 수와 학생 수 만큼의 점수로 이루어진다.
3. 입력받은 문자열을 하나씩 분리한다. num.split()
4. 학생 수(student)= 문자열 첫번째 인덱스, 점수(scores) = 문자열 두번째 인덱스부터 끝까지 
5. 점수를 하나씩 더하고 더한 수(score_sum)에 학생 수를 나눠 평균(avg)을 구한다.
6. 점수를 하나씩 평균과 비교해 평균보다 높은 점수를 받은 학생 수를 구한다. (over_score)
7. 평균보다 높은 점수를 받은 학생 수를 전채 학생 수로 나누고 100을 곱한다. 
'''

#1 
c = int(input())

#2
nums = []
for i in range(c):
    nums.append(input())

#3
for i in range(c):
  num = nums[i]
  num = num.split()
  score_sum = 0
  #4
  student = int(num[0])
  scores = num[1:]
  #5
  for j in scores:
      score = int(j)
      score_sum += score
  avg = score_sum/student
  over_score = 0
  #6
  for j in scores:
      score = int(j)
      if score > avg:
          over_score += 1
  #7
  over_avg = over_score/student
  print(format(over_avg*100,".3f")+"%")
      