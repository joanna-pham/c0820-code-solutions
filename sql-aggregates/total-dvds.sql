select "filmId",
       count("i".*) as "totalDvd"
  from "inventory" as "i"
  group by "filmId"
