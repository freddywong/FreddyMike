# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# TRIPS
Trip.create(origin: "1 George Street, Sydney", destination: "1 Hall Street, Bondi", days: 5, time_period: 12)

# CARS
Car.create(brandmodel: "Toyota Corolla", emissionperkm: 0.152)
Car.create(brandmodel: "Toyota Camry", emissionperkm: 0.183)
Car.create(brandmodel: "Toyota Prius", emissionperkm: 0.089)
Car.create(brandmodel: "Porsche 911", emissionperkm: 0.227)
Car.create(brandmodel: "Porsche Cayenne", emissionperkm: 0.267)
Car.create(brandmodel: "Jeep Wrangler", emissionperkm: 0.280)
Car.create(brandmodel: "Aston Martin DB9", emissionperkm: 0.325)
Car.create(brandmodel: "Bugatti Veyron", emissionperkm: 0.596)
Car.create(brandmodel: "Hummer H2", emissionperkm: 0.412)
Car.create(brandmodel: "M1 Abrams Tank", emissionperkm: 131.071)



