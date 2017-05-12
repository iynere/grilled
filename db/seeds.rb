User.create!([
  {username: "h4nkGr1ll", email: "hank@propane.edu", password_digest: "$2a$10$WT35IlfJMDgmAfOe1HirIepr5Bkj7Z6NbAOXuf3j9mErYnQhlEfx."},
  {username: "3DgUyF", email: "guyf@tripleD.gov", password_digest: "$2a$10$rty0kroGKQqG2gl5JQm1/egftr3YbzXZ3cW58fxO9j8L2fmeCqjte"},
  {username: "SauceBawse", email: "stubbs@bbq.gov", password_digest: "$2a$10$a1ZsF5Ku3VhyMBLHARcMTuBnNcqQzpffDXFZT2U4GHMCZXzwSf1WK" },
  {username: "SketchBall", email: "foreign.object@gmail.com", password_digest: "$2a$10$74kATDUdFDHGydpEvVNMuuEX1BKGKQVDbai3LPwSslLj.dvuD8XZq"},
])

Listing.create!([
  {name: 'Weber Collabo Mini Grill', brand: 'Supreme x Weber', price: 250, user_id: 1, description: 'unbelievably cool little grill, only problem is it uses charcoal.'},
  {name: 'Propane', brand: 'Artisan', price: 25, user_id: 1, description: 'This is serious stuff.'},
  {name: 'Propane Accessories', brand: 'Artisan', price: 75, user_id: 1, description: 'You know the drill!'},
  {name: 'Slammin Sauce', brand: 'Guy Fieri', price: 12, user_id: 2, description: 'MY SAUCE IS THE BOSS'},
  {name: 'Simmerin Shrimpstravaganza', brand: 'Guy Fieri', price: 50, user_id: 2, description: 'How much SHRIMP can you take?!'},
  {name: 'Signed Chef Hat', brand: 'Guy Fieri', price: 75, user_id: 2, description: 'SIGNED BY ME'},
  {name: 'Secret Recipe', brand: 'Stubbs', price: 5000, user_id: 3, description: 'this is the recipe for a true boss of a sauce.'},
  {name: 'Mountain Dew BBQ Sauce', brand: 'Stubbs X Supreme X Guy Fieri', price: 200, user_id: 3, description: 'RARE. ONE OF A KIND!'},
  {name: 'Boat', brand: 'Boat', price: 5000, user_id: 3, description: 'Looks like a grill, but is actually a Boat.'},
  {name: 'Tote Bag', brand: 'Rick Owens', price: 100, user_id: 3, description: 'I got this for free.'},
])

10.times do
  Listing.create!({name: Faker::Hipster.sentence(2), brand: Faker::Hipster.word, price: Faker::Number.between(50, 300), description: Faker::Hipster.paragraph, user_id: 4})
end

5.times do
  Message.create!({body: 'I have questions about these.', user_id: Faker::Number.between(2,4), listing_id: 3})
end
