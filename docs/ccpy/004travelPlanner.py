distance_mi =1
is_raining = True
has_bike =False
has_car =False
has_ride_share_app =False

if not distance_mi:
    print(False)
elif distance_mi<=1 and not is_raining:
    print(True)
elif distance_mi>1 and distance_mi<=6 and not is_raining and has_bike:
    print(True)
elif distance_mi>6 and (has_car or has_ride_share_app):
    print(True)
else:
    print(False)

