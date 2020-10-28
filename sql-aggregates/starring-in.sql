select "name",
       count("c".*) as "numOfMovies"
  from "categories" as "c"
  join "filmCategory" using ("categoryId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "firstName" = 'Lisa'
    and "lastName" = 'Monroe'
  group by "name"
