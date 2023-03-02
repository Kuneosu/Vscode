import datetime

# 현재 시간 구하기
now = datetime.datetime.now()

# 일정 시간 입력받기
schedule_str = input("일정 시간을 24시간 형식으로 입력하세요(ex. 18:30): ")
schedule_time = datetime.datetime.strptime(schedule_str, "%H:%M")

# 시간 차이 계산
time_diff = schedule_time - now
hours_diff = time_diff.seconds // 3600
mins_diff = int((time_diff.seconds % 3600) / 60)
seconds_diff = int((time_diff.seconds%3600)%60)

# 결과 출력
print(f"현재 시간으로부터 {hours_diff}시간 {mins_diff}분 {seconds_diff}초 남았습니다.")

# 챗 GPT 를 이용하여 작성한 코드 입니다.