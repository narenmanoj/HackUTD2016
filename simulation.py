class Simulation:
    i = 123
    programText = ""
    currentPos = 0

    'x86 box info'
    rsi = 0
    rdi = 0
    rax = 0
    rbp = 0
    rsp = 0
    rip = 0
    r = list(12)

    def __init__(self, inputText):
        self.i = 5
        self.programText = inputText

    def loadProgramText(self, inputText):
        self.programText = inputText

    def step(self):
        self.currentPos += 1

    def insert(self, instr):
        'do something'

    def reset(self):
        'do something'

    def remove(self):
        'do something'

    def skip(self):
        'do something'

    