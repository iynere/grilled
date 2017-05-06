User.create!([
  {username: "h4nkGr1ll", email: "hank@propane.edu", password_digest: "$2a$10$WT35IlfJMDgmAfOe1HirIepr5Bkj7Z6NbAOXuf3j9mErYnQhlEfx."},
  {username: "3DgUyF", email: "guyf@tripleD.gov", password_digest: "$2a$10$rty0kroGKQqG2gl5JQm1/egftr3YbzXZ3cW58fxO9j8L2fmeCqjte"}
])

Listing.create!([
  {name: 'Weber Collabo Mini Grill', brand: 'Supreme x Weber', price: 250, user_id: 1, description: 'unbelievably cool little grill, only problem is it uses charcoal.'},
  {name: 'Propane', brand: 'Artisan', price: 25, user_id: 1, description: 'This is serious stuff.'},
  {name: 'Propane Accessories', brand: 'Artisan', price: 75, user_id: 1, description: 'You know the drill!'},
  {name: 'Slammin Sauce', brand: 'Guy Fieri', price: 12, user_id: 2, description: 'MY SAUCE IS THE BOSS'},
  {name: 'Simmerin Shrimpstravaganza', brand: 'Guy Fieri', price: 50, user_id: 2, description: 'How much SHRIMP can you take'},
  {name: 'Signed Chef Hat', brand: 'Guy Fieri', price: 75, user_id: 2, description: 'SIGNED BY ME'},

])
