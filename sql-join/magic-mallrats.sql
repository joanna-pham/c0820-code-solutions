select "c"."firstName" as "first name",
       "c"."lastName" as "last name"
  from "customers" as "c"
  join "rentals" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
  where "title" = 'Magic Mallrats'
