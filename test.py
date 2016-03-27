from simulation import *


def main():
    print("hello world\n")
    hi = Simulation(["push $0x100", "pop %rax"])
    hi.step()
    hi.step()

if __name__ == "__main__":
    main()

# print("hello world")
