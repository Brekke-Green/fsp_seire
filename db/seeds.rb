# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')

# demo user
User.create(username: 'Demo User', password: 'password', email: 'demo.user@gmail.com')

# test users
User.create(username: 'Grekke Breen', password: 'password', email: 'grekke.breen@gmail.com')
User.create(username: 'Walejandro', password: 'password', email: 'Allweil@gmail.com')
User.create(username: 'Tarco Morre', password: 'password', email: 'po.tate.o@gmail.com')