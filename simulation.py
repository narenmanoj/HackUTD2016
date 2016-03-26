class Registers:
    [rsi, rdi, rax, rbp, rsp, rip,
     r1, r2, r3, r4, r5, r6, r7,
     r8, r9, r10, r11] = range(17)


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
    r = list(0 for i in range(1, 12))

    stack = {}

    def __init__(self, inputText):
        self.i = 5
        self.programText = inputText

    def load_text(self, inputText):
        self.programText = inputText
        self.reset()

    def step(self):
        """executes current instruction then advances the position"""
        self.currentPos += 1

    def insert(self, instr):
        'do something'

    def reset(self):
        'do something'
        self = Simulation(self.programText)

    def remove(self):
        'do something'

    def skip(self):
        """skips next instruction"""
        'do something'

    def get_stack(self):
        """gets stack"""
        return self.stack




