import datetime
import tkinter as tk

class App:
    def __init__(self):
        self.window = tk.Tk()
        self.window.title("남은 시간 알리미")

        # 현재 시간 구하기
        self.now = datetime.datetime.now()

        # 입력 창 생성
        self.entry_frame = tk.Frame(self.window, height=50)
        self.entry_frame.pack(fill="x")

        self.label = tk.Label(self.entry_frame, text="일정 시간을 24시간 형식으로 입력하세요(ex. 18:30):")
        self.label.pack(side="left", padx=10)

        self.entry = tk.Entry(self.entry_frame, width=15)
        self.entry.pack(side="left", padx=10)

        # 버튼 생성
        self.button = tk.Button(self.window, text="시간 계산", command=self.calculate_time_diff)
        self.button.pack(pady=10)

    def calculate_time_diff(self):
        # 일정 시간 입력받기
        schedule_str = self.entry.get()
        schedule_time = datetime.datetime.strptime(schedule_str, "%H:%M")

        # 시간 차이 계산
        time_diff = schedule_time - self.now
        hours_diff = time_diff.seconds // 3600
        mins_diff = int((time_diff.seconds % 3600) / 60)
        seconds_diff = int((time_diff.seconds%3600)%60)

        # 결과 출력
        result_str = f"현재 시간으로부터 {hours_diff}시간 {mins_diff}분 {seconds_diff}초 남았습니다."
        self.show_result(result_str)

    def show_result(self, result_str):
        # 새로운 윈도우 생성
        result_window = tk.Toplevel(self.window)
        result_window.title("결과")

        # 결과 창의 크기 조절
        result_window.geometry("360x180")

        # 결과 창 생성
        result_frame = tk.Frame(result_window, height=100)
        result_frame.pack(fill="both", expand=True)

        # 라벨 생성
        result_label = tk.Label(result_frame, text=result_str)
        result_label.pack(side="top", pady=30)

        # 버튼 프레임 생성
        button_frame = tk.Frame(result_frame, height=50)
        button_frame.pack(side="bottom", pady=10)

        # 버튼 생성
        restart_button = tk.Button(button_frame, text="다시 시작", command=self.restart_program, width=10)
        restart_button.pack(side="left", padx=10)

        # 종료 버튼 생성
        close_button = tk.Button(button_frame, text="종료", command=self.window.quit, width=10)
        close_button.pack(side="right", padx=10)

    def restart_program(self):
        self.window.destroy()
        App().run()

    def run(self):
        # 입력 창, 버튼, 라벨 가운데 정렬
        self.window.update_idletasks()
        width = self.window.winfo_width()
        height = self.window.winfo_height()
        x = (self.window.winfo_screenwidth() // 2) - (width // 2)
        y = (self.window.winfo_screenheight() // 2) - (height // 2)
        self.window.geometry('{}x{}+{}+{}'.format(width, height, x, y))

        self.window.mainloop()

if __name__ == '__main__':
    app = App()
    app.run()

# 챗 GPT 를 이용하여 작성한 코드입니다.