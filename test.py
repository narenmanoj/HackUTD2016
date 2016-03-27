from simulation import *


def main():
    print("hello world\n")
    hi = Simulation(["mov $0x123, %rbx", "mov %rbx, %rax"])
    hi.step()
    hi.step()

if __name__ == "__main__":
    main()

# print("hello world")
