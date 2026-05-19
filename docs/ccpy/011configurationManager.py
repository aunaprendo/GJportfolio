test_settings = {'theme': 'dark', 'notifications': 'enabled', 'volume': 'high'}
def add_setting (setting, new):
    key, value = new
    key = key.lower()
    value = value.lower()
    if key in setting:
        return f"Setting '{key}' already exists! Cannot add a new setting with this name."
    else:
        setting[key] = value
        return f"Setting '{key}' added with value '{value}' successfully!"

def update_setting (setting,new):
    key, value = new
    key = key.lower()
    value = value.lower()
    if key in setting:
        setting[key] = value
        return f"Setting '{key}' updated to '{value}' successfully!"
    else:
        return f"Setting '{key}' does not exist! Cannot update a non-existing setting."

def delete_setting (setting,new):
    new = new.lower()
    if new in setting:
        setting.pop(new)
        return f"Setting '{new}' deleted successfully!"
    else:
        return 'Setting not found!'

def view_settings (setting):
    if not setting:
        return 'No settings available.'
    else:
        current = f"Current User Settings:\n"
        for key, value in setting.items():
            current+=f'{key.title()}: {value}\n'
        return current


print(view_settings(test_settings))
