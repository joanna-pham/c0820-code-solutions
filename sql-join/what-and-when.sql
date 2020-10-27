select "f"."title" as "title",
       "categories"."name",
       "f"."releaseYear" as "release year"
  from "films" as "f"
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
  where "title" = 'Boogie Amelie'
