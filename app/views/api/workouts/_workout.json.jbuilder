json.extract! workout, :id, :user_id, :route_id, :workout_type, :duration
json.user do 
    json.extract! workout.user, :username
end
json.route do 
    json.extract! workout.route, :route_name
end