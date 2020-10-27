select "a"."firstName" as "first name",
       "a"."lastName" as "last name"
  from "actors" as "a"
  join "castMembers" using ("actorId")
  join "films" using ("filmId")
  where "title" = 'Jersey Sassy'
