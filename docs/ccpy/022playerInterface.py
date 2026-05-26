from abc import ABC, abstractmethod
import random

class Player(ABC):
    def __init__(self):
        self.moves = []
        self.position=(0,0)
        self.path=[self.position]
    def make_move (self):
        picked = random.choice(self.moves)
        self.position = (
            self.position[0] + picked[0],
            self.position[1] + picked[1])
        self.path.append(self.position)
        return self.position
    @abstractmethod
    def level_up (self):
        pass
		
class Pawn(Player):

    def __init__(self):
        super().__init__()

        self.moves = [
            (0, 1),
            (0, -1),
            (-1, 0),
            (1, 0)
        ]

    def level_up(self):
        self.moves.append((1,1))
        self.moves.append((-1,-1))
        self.moves.append((-1,1))
        self.moves.append((1,-1))

		