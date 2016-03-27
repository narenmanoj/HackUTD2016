import collections

class Registers:
    [rsi, rdi, rax, rbp, rsp, rbx,
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
    rbp = 1000
    rsp = 992
    rbx = 0
    r = list(0 for i in range(1, 12))

    stack = {1000: 500}
    memory = {}

    def __init__(self, input_text):
        """input text is a list of strings, and each string
        is an instruction"""
        self.i = 5
        self.programText = input_text

    def load_text(self, input_text):
        self.programText = input_text
        self.reset()

    def parse_src(self, src):
        """parses a source operand and returns the appropriate value"""
        # first deal with immediate values
        # eval(src)
        if src[0] == '$':
            return int(src[1:], 0)
        if len(src) == 4:
            if src == "%rsi":
                return self.rsi
            if src == "%esi":
                return self.rsi & 0x0000FFFF
            if src == "%rdi":
                return self.rdi
            if src == "%edi":
                return self.rdi & 0x0000FFFF
            if src == "%rax":
                return self.rax
            if src == "%eax":
                return self.rax & 0x0000FFFF
            if src == "%rbp":
                return self.rbp
            if src == "%ebp":
                return self.rbp & 0x0000FFFF
            if src == "%rsp":
                return self.rsp
            if src == "%esp":
                return self.rsp & 0x0000FFFF
            if src == "%rbx":
                return self.rbx
            if src == "%ebx":
                return self.rbx & 0x0000FFFF
            if src == "%r8":
                return self.r[8]
            if src == "%r9":
                return self.r[9]
            if src == "%r10":
                return self.r[10]
            if src == "%r11":
                return self.r[11]
        if len(src) == 3:
            if src == "%si":
                return self.rsi & 0x000000FF
            if src == "%di":
                return self.rdi & 0x000000FF
            if src == "%ax":
                return self.rax & 0x000000FF
            if src == "%ah":
                return (self.rax >> 1) & 0x0000000F
            if src == "%al":
                return self.rax & 0x0000000F
            if src == "%bp":
                return self.rbp & 0x000000FF
            if src == "%sp":
                return self.rsp & 0x000000FF
            if src == "%bx":
                return self.rbx & 0x000000FF
            if src == "%bh":
                return (self.rbx >> 1) & 0x0000000F
            if src == "%bl":
                return self.rbx & 0x0000000F
        # now we have to deal with indirect addressing
        # we have imm, eb, ei, s, and we have to determine these values now
        str_pos = 0
        # print(src)
        while src[str_pos] != '(':
            str_pos += 1
            if(str_pos == len(src)):
                # we have just an immedaite
                imm = int(src, 0)
                if imm in self.memory:
                    return self.memory[imm]
                return 0
            if src[str_pos] == '(':
                if str_pos == 0:
                    imm = 0
                    break
                else:
                    imm = int(src[0:str_pos], 0)
                    break
        str_pos += 1
        old_str_pos = str_pos
        while src[str_pos] != ',':
            str_pos += 1
        if old_str_pos == str_pos:
            eb = 0
        else:
            eb = (src[old_str_pos:str_pos])
        str_pos += 1
        old_str_pos = str_pos
        while src[str_pos] != ',':
            str_pos += 1
        if old_str_pos == str_pos:
            ei = 0
        else:
            ei = (src[old_str_pos:str_pos])
        str_pos += 1
        old_str_pos = str_pos
        while str[str_pos] != ')':
            str_pos += 1
        if old_str_pos == str_pos:
            s = 0
        else:
            s = int(src[old_str_pos:str_pos], 0)
        ans = imm
        ans += self.parse_src(eb)
        multiple = self.parse_src(ei)
        if s == 0:
            s = 1
        ans += (s * multiple)
        if ans in self.memory:
            return self.memory[ans]
        else:
            return 0

    def parse_destination(self, dest):
        if len(dest) == 4:
            return dest
        if len(dest) == 3:
            return dest
        str_pos = 0
        while dest[str_pos] != '(':
            str_pos += 1
        if str_pos == 0:
            imm = 0
        else:
            imm = int(dest[0:str_pos], 0)
        str_pos += 1
        old_str_pos = str_pos
        while dest[str_pos] != ',':
            str_pos += 1
        if old_str_pos == str_pos:
            eb = 0
        else:
            eb = (dest[old_str_pos:str_pos])
        str_pos += 1
        old_str_pos = str_pos
        while dest[str_pos] != ',':
            str_pos += 1
        if old_str_pos == str_pos:
            ei = 0
        else:
            ei = (dest[old_str_pos:str_pos])
        str_pos += 1
        old_str_pos = str_pos
        while str[str_pos] != ')':
            str_pos += 1
        if old_str_pos == str_pos:
            s = 0
        else:
            s = int(dest[old_str_pos:str_pos], 0)
        ans = imm
        ans += self.parse_src(eb)
        multiple = self.parse_src(ei)
        if s == 0:
            s = 1
        ans += (s * multiple)
        return ans

    def set_reg(self, src, dest_val):
        """sets a destination register to a value"""
        if len(src) == 4:
            if src == "%rsi":
                self.rsi = dest_val
            if src == "%esi":
                self.rsi = dest_val & 0x0000FFFF
            if src == "%rdi":
                self.rdi = dest_val
            if src == "%edi":
                self.rdi = dest_val & 0x0000FFFF
            if src == "%rax":
                self.rax = dest_val
            if src == "%eax":
                self.rax = dest_val & 0x0000FFFF
            if src == "%rbp":
                self.rbp = dest_val
            if src == "%ebp":
                self.rbp = dest_val & 0x0000FFFF
            if src == "%rsp":
                self.rsp = dest_val
            if src == "%esp":
                self.rsp = dest_val & 0x0000FFFF
            if src == "%rbx":
                self.rbx = dest_val
            if src == "%ebx":
                self.rbx = dest_val & 0x0000FFFF
            if src == "%r8":
                self.r[8] = dest_val
            if src == "%r9":
                self.r[9] = dest_val
            if src == "%r10":
                self.r[10] = dest_val
            if src == "%r11":
                self.r[11] = dest_val
        if len(src) == 3:
            if src == "%si":
                self.rsi = dest_val & 0x000000FF
            if src == "%di":
                self.rdi = dest_val & 0x000000FF
            if src == "%ax":
                self.rax = dest_val & 0x000000FF
            if src == "%ah":
                self.rax = (dest_val & 0x0000000F) << 1
            if src == "%al":
                self.rax = dest_val & 0x0000000F
            if src == "%bp":
                self.rbp = dest_val & 0x000000FF
            if src == "%sp":
                self.rsp = dest_val & 0x000000FF
            if src == "%bx":
                self.rbx = dest_val & 0x000000FF
            if src == "%bh":
                self.rbx = (dest_val & 0x0000000F) << 1
            if src == "%bl":
                self.rbx = dest_val & 0x0000000F

    def step(self):
        """executes current instruction then advances the position"""
        current_instr = self.programText[self.currentPos]
        str_pos = 0
        while current_instr[str_pos] != ' ':
            str_pos += 1
        # at this point, the substring from 0 to str_pos (excl) has the instruction mnemonic
        mnemonic = current_instr[0:str_pos]
        str_pos += 1  # points to the first character of the first operand
        if mnemonic == "mov":
            'mov expects two arguments'
            old_str_pos = str_pos
            while current_instr[str_pos] != ',':
                str_pos += 1
            src = current_instr[old_str_pos:str_pos]
            str_pos += 2
            old_str_pos = str_pos
            dest = current_instr[str_pos:]
            src_val = self.parse_src(src)
            # print(src_val)
            # print(dest)
            dest_val = self.parse_destination(dest)
            if type(dest_val) is int:
                self.memory[dest_val] = src_val
            else:
                self.set_reg(dest_val, src_val) # mov instruction just copies stuff
            # print(str(self.rax))
        elif mnemonic == "push":
            'push expects one argument'
            operand = current_instr[str_pos:]
            self.rsp -= 8
            oval = self.parse_src(operand)
            self.memory[self.rsp] = oval
        elif mnemonic == "pop":
            'pop expects one argument'
            operand = current_instr[str_pos:]
            self.set_reg(operand, self.memory[self.rsp])
            self.rsp += 8
            print(str(self.rax))
        elif mnemonic == "lea":
            'lea'
        elif mnemonic == "add":
            'add'
            old_str_pos = str_pos
            while current_instr[str_pos] != ',':
                str_pos += 1
            src = current_instr[old_str_pos:str_pos]
            str_pos += 2
            old_str_pos = str_pos
            dest = current_instr[str_pos:]
            addend1 = self.parse_src(src)
            # print(src_val)
            # print(dest)
            addend2 = self.parse_src(dest)
            sum = addend1 + addend2
            destination = self.parse_destination(dest) # dest is the second operand
            if type(destination) is int: # if it's in memory
                self.memory[destination] = sum
            else :
                self.set_reg(destination, sum)  # mov instruction just copies stuff
            # print(str(self.rax))
        elif mnemonic == "sub":
            'sub'
            'add'
            old_str_pos = str_pos
            while current_instr[str_pos] != ',':
                str_pos += 1
            src = current_instr[old_str_pos:str_pos]
            str_pos += 2
            old_str_pos = str_pos
            dest = current_instr[str_pos:]
            addend1 = self.parse_src(src)
            # print(src_val)
            # print(dest)
            addend2 = self.parse_src(dest)
            sum = addend1 - addend2
            destination = self.parse_destination(dest)  # dest is the second operand
            if type(destination) is int:  # if it's in memory
                self.memory[destination] = sum
            else:
                self.set_reg(destination, sum)  # mov instruction just copies stuff
            # print(str(self.rax))
        elif mnemonic == "imul":
            'mul'
            'add'
            old_str_pos = str_pos
            while current_instr[str_pos] != ',':
                str_pos += 1
            src = current_instr[old_str_pos:str_pos]
            str_pos += 2
            old_str_pos = str_pos
            dest = current_instr[str_pos:]
            addend1 = self.parse_src(src)
            # print(src_val)
            # print(dest)
            addend2 = self.parse_src(dest)
            sum = addend1 * addend2
            destination = self.parse_destination(dest)  # dest is the second operand
            if type(destination) is int:  # if it's in memory
                self.memory[destination] = sum
            else:
                self.set_reg(destination, sum)  # mov instruction just copies stuff
            # print(str(self.rax))
        elif mnemonic == "ret":
            'ret'
        elif mnemonic == "call":
            'call'
        elif mnemonic == "cmp":
            'comparison'
        else:
            print("error!\n")
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

    def get_registers(self):
        """gets every single register value"""
        return 0
