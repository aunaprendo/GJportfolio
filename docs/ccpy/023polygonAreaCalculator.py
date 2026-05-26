import math

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def set_width(self, new_width):
        self.width= new_width

    def set_height(self, new_height):
        self.height= new_height

    def get_area(self):
        return self.width*self.height

    def get_perimeter(self):
        return 2*(self.width+self.height)

    def get_diagonal(self):
        return math.sqrt(pow(self.width, 2)+ pow(self.height, 2))

    def get_picture(self):
        stars ="*"
        if self.width>50 or self.height>50:
            return "Too big for picture."
        row = f'{stars*self.width}\n'
        full = row*self.height
        return full

    def get_amount_inside(self, shape):
        across=math.floor(self.width/shape.width)
        high=math.floor(self.height/shape.height)
        return across*high

    def __str__(self):
        return f'Rectangle(width={self.width}, height={self.height})'
class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)

    def set_width(self, side):
        self.width = side
        self.height = side

    def set_height(self, side):
        self.height = side
        self.width = side
    
    def set_side(self, side):
        self.height = side
        self.width = side
        
    def __str__(self):
        return f'Square(side={self.width})'

spongebob = Rectangle(5, 6)
square = Square(6)
squareMini = Square(2)
#print(spongebob.get_picture())
#print(spongebob.get_amount_inside(square))
print(square.get_amount_inside(squareMini))
print(square)
