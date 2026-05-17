full_dot = '●'
empty_dot = '○'

def create_character(name, strength, intelligence, charisma):
    if not isinstance(name, str):
        return "The character name should be a string"
    elif not name:
        return "The character should have a name"
    elif len(name)>10:
        return "The character name is too long"
    elif name.count(" ")>0:
        return "The character name should not contain spaces"
    
    if not all (isinstance(stat, int) for stat in (strength, intelligence, charisma)):
        return "All stats should be integers"
    elif any(stat<1 for stat in (strength, intelligence, charisma)):
        return "All stats should be no less than 1"
    elif any(stat>4 for stat in (strength, intelligence, charisma)):
        return "All stats should be no more than 4"
    elif strength+intelligence+ charisma !=7:
        return "The character should start with 7 points"
    strength = (full_dot*strength) + (empty_dot*(10-strength))

    intelligence = (full_dot*intelligence) + (empty_dot*(10-intelligence))

    charisma = (full_dot*charisma) + (empty_dot*(10-charisma))

    return f"{name}\nSTR {strength}\nINT {intelligence}\nCHA {charisma}"

print(create_character('ren', 4, 2, 1))